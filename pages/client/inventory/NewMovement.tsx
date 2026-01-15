import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewMovement = () => {
    const navigate = useNavigate();

    // Form State
    const [formData, setFormData] = useState({
        type: 'entry', // entry, exit
        date: new Date().toISOString().split('T')[0],
        category: '',
        documentNumber: '',
        provider: '',
        depot: '',
        observation: ''
    });

    // Items State
    const [items, setItems] = useState([
        { id: 1, product: '', qty: 1, cost: 0, total: 0 }
    ]);

    const handleAddItem = () => {
        setItems([...items, { id: Date.now(), product: '', qty: 1, cost: 0, total: 0 }]);
    };

    const handleRemoveItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleSave = () => {
        console.log('Saving...', { formData, items });
        navigate('/app/inventory/movements');
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Nova Movimentação</h1>
                        <p className="text-gray-500 dark:text-gray-400">Registre uma entrada ou saída de estoque</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Save size={20} />
                        Salvar Movimentação
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Dados da Movimentação</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Movimento</label>
                                <div className="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                    <button
                                        onClick={() => setFormData({ ...formData, type: 'entry' })}
                                        className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${formData.type === 'entry'
                                                ? 'bg-white dark:bg-gray-600 text-green-600 shadow-sm'
                                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                                            }`}
                                    >
                                        Entrada
                                    </button>
                                    <button
                                        onClick={() => setFormData({ ...formData, type: 'exit' })}
                                        className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${formData.type === 'exit'
                                                ? 'bg-white dark:bg-gray-600 text-red-600 shadow-sm'
                                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                                            }`}
                                    >
                                        Saída
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Data</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria</label>
                                <select
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="compra">Compra</option>
                                    <option value="devolucao">Devolução</option>
                                    <option value="ajuste">Ajuste de Estoque</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nº Documento / NF</label>
                                <input
                                    type="text"
                                    placeholder="Ex: 12345"
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {formData.type === 'entry' ? 'Fornecedor' : 'Destinatário'}
                                </label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Pesquisar..."
                                        className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Depósito</label>
                                <select
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                >
                                    <option value="">Selecione o Depósito...</option>
                                    <option value="padrao">Depósito Padrão</option>
                                    <option value="filial">Filial Centro</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Observações</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white resize-none"
                                    placeholder="Informações adicionais..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Summary */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Resumo</h3>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Total de Itens</span>
                                <span className="font-medium text-gray-900 dark:text-white">{items.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Qtd. Total</span>
                                <span className="font-medium text-gray-900 dark:text-white">{items.reduce((acc, item) => acc + item.qty, 0)}</span>
                            </div>
                            <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                <span className="text-base font-bold text-gray-800 dark:text-white">Valor Total</span>
                                <span className="text-xl font-bold text-[#6C63FF]">R$ {items.reduce((acc, item) => acc + (item.qty * item.cost), 0).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products List */}
                <div className="lg:col-span-3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Itens da Movimentação</h2>
                            <button
                                onClick={handleAddItem}
                                className="text-sm text-[#6C63FF] hover:text-[#5a52d5] font-medium flex items-center gap-1"
                            >
                                <Plus size={16} /> Adicionar Item
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-100 dark:border-gray-700">
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase">Produto</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-32">Qtd</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-32">Custo Unit.</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-32">Total</th>
                                        <th className="w-10"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {items.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="py-2 px-3">
                                                <input
                                                    type="text"
                                                    placeholder="Pesquisar produto..."
                                                    className="w-full px-2 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.qty}
                                                    onChange={(e) => {
                                                        const newItems = [...items];
                                                        newItems[index].qty = parseInt(e.target.value) || 0;
                                                        setItems(newItems);
                                                    }}
                                                    className="w-full px-2 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    value={item.cost}
                                                    onChange={(e) => {
                                                        const newItems = [...items];
                                                        newItems[index].cost = parseFloat(e.target.value) || 0;
                                                        setItems(newItems);
                                                    }}
                                                    className="w-full px-2 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                R$ {(item.qty * item.cost).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-500 hover:text-red-700 p-1 rounded-md"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {items.length === 0 && (
                            <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                                Nenhum item adicionado.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewMovement;
