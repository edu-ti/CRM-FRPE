import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

const ProductStatus = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const statuses = [
        { id: 1, name: 'Ativo', color: 'Verde', description: 'Produto disponível para venda e movimentação' },
        { id: 2, name: 'Inativo', color: 'Vermelho', description: 'Produto bloqueado para novas vendas' },
        { id: 3, name: 'Baixo Estoque', color: 'Amarelo', description: 'Sinaliza necessidade de reposição' },
        { id: 4, name: 'Descontinuado', color: 'Cinza', description: 'Não será mais comprado/produzido' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Status de Produto</h1>
                    <p className="text-gray-500 dark:text-gray-400">Defina os estados possíveis para seus produtos</p>
                </div>
                <button className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus size={20} />
                    Novo Status
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar status..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Nome</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Cor</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Descrição</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {statuses.map((s) => (
                                <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">{s.name}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{s.color}</td>
                                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400 text-sm">{s.description}</td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 transition-colors">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductStatus;
