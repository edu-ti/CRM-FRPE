import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepotsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const depots = [
        { id: 1, name: 'Depósito Central', type: 'Físico', address: 'Rua A, 123 - Centro', active: true },
        { id: 2, name: 'Filial Centro', type: 'Físico', address: 'Av. Brasil, 500 - Centro', active: true },
        { id: 3, name: 'Farmácia Hospitalar', type: 'Físico', address: 'Hospital Santa Rita', active: true },
        { id: 4, name: 'Almoxarifado', type: 'Físico', address: 'Subsolo', active: true },
        { id: 5, name: 'Estoque Virtual E-commerce', type: 'Virtual', address: '-', active: true },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Depósitos</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie seus locais de armazenamento</p>
                </div>
                <Link
                    to="/app/inventory/new-depot"
                    className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Novo Depósito
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar depósito..."
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
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Tipo</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Endereço</th>
                                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {depots.map((d) => (
                                <tr key={d.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">{d.name}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${d.type === 'Físico' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'}`}>
                                            {d.type}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">
                                        <div className="flex items-center gap-1">
                                            {d.address !== '-' && <MapPin size={14} className="text-gray-400" />}
                                            {d.address}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${d.active
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {d.active ? 'Ativo' : 'Inativo'}
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

export default DepotsList;
