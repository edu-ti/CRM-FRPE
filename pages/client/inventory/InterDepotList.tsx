import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const InterDepotList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const transfers = [
        { id: 1, date: '2024-03-21', origin: 'Depósito Central', dest: 'Filial Centro', items: 15, status: 'completed', user: 'Admin' },
        { id: 2, date: '2024-03-20', origin: 'Depósito Central', dest: 'Farmácia Hospitalar', items: 5, status: 'pending', user: 'Roberto' },
        { id: 3, date: '2024-03-19', origin: 'Filial Centro', dest: 'Depósito Central', items: 2, status: 'completed', user: 'Maria' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Transferências entre Depósitos</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie a movimentação de itens entre seus estoques</p>
                </div>
                <Link
                    to="/app/inventory/new-inter-depot"
                    className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Nova Transferência
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por depósito..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Filter size={20} />
                        Status
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Data</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Origem</th>
                                <th className="w-8"></th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Destino</th>
                                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Qtd. Itens</th>
                                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Usuário</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {transfers.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{t.date}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{t.origin}</td>
                                    <td className="py-3 px-0 text-gray-400">
                                        <ArrowRight size={16} />
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{t.dest}</td>
                                    <td className="py-3 px-4 text-center text-gray-800 dark:text-gray-200 font-mono">{t.items}</td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${t.status === 'completed'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                            }`}>
                                            {t.status === 'completed' ? 'Concluído' : 'Pendente'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400 text-sm">{t.user}</td>
                                    <td className="py-3 px-4 text-right">
                                        <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Detalhes">
                                            <FileText size={18} />
                                        </button>
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

export default InterDepotList;
