import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowUpRight, ArrowDownLeft, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovementsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data for demonstration
    const movements = [
        { id: 1, date: '2024-03-20', type: 'entry', doc: 'NF-1234', origin: 'Fornecedor A', product: 'Paracetamol 500mg', qty: 500, user: 'Admin' },
        { id: 2, date: '2024-03-19', type: 'exit', doc: 'REQ-001', origin: 'Farmácia Central', product: 'Dipirona 1g', qty: 200, user: 'João' },
        { id: 3, date: '2024-03-18', type: 'entry', doc: 'NF-5678', origin: 'Fornecedor B', product: 'Amoxicilina', qty: 1000, user: 'Admin' },
        { id: 4, date: '2024-03-18', type: 'exit', doc: 'SAIDA-99', origin: 'Almoxarifado', product: 'Luvas P', qty: 50, user: 'Maria' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Movimentações</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie entradas e saídas de estoque</p>
                </div>
                <Link
                    to="/app/inventory/new-movement"
                    className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Nova Movimentação
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por documento, produto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Filter size={20} />
                        Filtros
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Calendar size={20} />
                        Período
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Data</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Tipo</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Documento</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Origem/Destino</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Produto</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Quantidade</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Usuário</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {movements.map((movement) => (
                                <tr key={movement.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{movement.date}</td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${movement.type === 'entry'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {movement.type === 'entry' ? <ArrowDownLeft size={12} /> : <ArrowUpRight size={12} />}
                                            {movement.type === 'entry' ? 'Entrada' : 'Saída'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{movement.doc}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{movement.origin}</td>
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">{movement.product}</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 font-mono">{movement.qty}</td>
                                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400 text-sm">{movement.user}</td>
                                    <td className="py-3 px-4 text-right">
                                        <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-500 dark:text-gray-400 transition-colors" title="Ver Detalhes">
                                            <FileText size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between mt-4 px-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Mostrando 1-4 de 4 registros
                    </span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded-md text-sm disabled:opacity-50" disabled>Anterior</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded-md text-sm disabled:opacity-50" disabled>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovementsList;
