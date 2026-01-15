import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

const UnitsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const units = [
        { id: 1, name: 'Unidade', acro: 'UN', active: true },
        { id: 2, name: 'Caixa', acro: 'CX', active: true },
        { id: 3, name: 'Quilograma', acro: 'KG', active: true },
        { id: 4, name: 'Litro', acro: 'L', active: true },
        { id: 5, name: 'Metro', acro: 'M', active: true },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Unidades de Medida</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie as unidades de medida dos produtos</p>
                </div>
                <button className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus size={20} />
                    Nova Unidade
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar unidade..."
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
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Sigla</th>
                                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {units.map((u) => (
                                <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">{u.name}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{u.acro}</td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.active
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {u.active ? 'Ativa' : 'Inativa'}
                                        </span>
                                    </td>
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

export default UnitsList;
