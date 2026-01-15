import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewInterDepot = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        origin: '',
        destination: '',
        observation: ''
    });

    const [items, setItems] = useState([
        { id: 1, product: '', qty: 1 }
    ]);

    const handleAddItem = () => {
        setItems([...items, { id: Date.now(), product: '', qty: 1 }]);
    };

    const handleRemoveItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleSave = () => {
        console.log('Saving transfer...', { formData, items });
        navigate('/app/inventory/inter-depot');
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Nova Transferência</h1>
                        <p className="text-gray-500 dark:text-gray-400">Transferir itens entre depósitos</p>
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
                        Confirmar Transferência
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Dados da Transferência</h2>

                        <div className="space-y-4">
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
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Depósito de Origem</label>
                                <select
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                    value={formData.origin}
                                    onChange={e => setFormData({ ...formData, origin: e.target.value })}
                                >
                                    <option value="">Selecione...</option>
                                    <option value="central">Depósito Central</option>
                                    <option value="filial">Filial Centro</option>
                                </select>
                            </div>

                            <div className="flex justify-center text-gray-400">
                                <ArrowRight className="transform rotate-90" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Depósito de Destino</label>
                                <select
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                                    value={formData.destination}
                                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                                >
                                    <option value="">Selecione...</option>
                                    <option value="central">Depósito Central</option>
                                    <option value="filial">Filial Centro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Observações</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white resize-none"
                                    placeholder="Motivo da transferência..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Itens para Transferir</h2>
                            <button
                                onClick={handleAddItem}
                                className="text-sm text-[#6C63FF] hover:text-[#5a52d5] font-medium flex items-center gap-1"
                            >
                                <Plus size={16} /> Adicionar Produto
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-100 dark:border-gray-700">
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase">Produto</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-32">Quantidade</th>
                                        <th className="w-10"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {items.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="py-2 px-3">
                                                <input
                                                    type="text"
                                                    placeholder="Pesquisar produto no estoque de origem..."
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

export default NewInterDepot;
