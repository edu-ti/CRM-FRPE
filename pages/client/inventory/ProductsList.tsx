import React, { useState } from 'react';
import { Search, Plus, Filter, Package, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const products = [
        { id: 1, sku: 'PROD-001', name: 'Paracetamol 500mg', depot: 'Depósito Central', qty: 1500, cost: 2.50, price: 5.00, status: 'Ativo' },
        { id: 2, sku: 'PROD-002', name: 'Dipirona 1g', depot: 'Farmácia Hospitalar', qty: 300, cost: 3.00, price: 6.50, status: 'Ativo' },
        { id: 3, sku: 'PROD-003', name: 'Amoxicilina 500mg', depot: 'Depósito Central', qty: 50, cost: 8.90, price: 18.00, status: 'Baixo Estoque' },
        { id: 4, sku: 'PROD-004', name: 'Seringa 5ml', depot: 'Almoxarifado', qty: 5000, cost: 0.50, price: 1.20, status: 'Ativo' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Produtos</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie seu catálogo de produtos e serviços</p>
                </div>
                <Link
                    to="/app/inventory/new-product"
                    className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Novo Produto
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por nome, SKU, código de barras..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Filter size={20} />
                        Filtros
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-gray-700">
                                <th className="w-10 py-3 px-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Produto</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Depósito</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Quantidade</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Custo</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Preço</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {products.map((p) => (
                                <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                                                <Package size={20} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 dark:text-white">{p.name}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SKU: {p.sku}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{p.depot}</td>
                                    <td className="py-3 px-4">
                                        <span className={`font-medium ${p.qty < 100 ? 'text-red-500' : 'text-gray-800 dark:text-gray-200'}`}>
                                            {p.qty}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">R$ {p.cost.toFixed(2)}</td>
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">R$ {p.price.toFixed(2)}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === 'Ativo'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                            }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-500 dark:text-gray-400 transition-colors">
                                                <Eye size={16} />
                                            </button>
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

                <div className="flex items-center justify-between mt-4 px-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Mostrando 1-4 de 4 produtos
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

export default ProductsList;
