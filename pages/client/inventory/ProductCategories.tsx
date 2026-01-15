import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronRight, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data for flat list
    const categories = [
        { id: 1, name: 'Aparelho', code: '0020' },
        { id: 2, name: 'Brocas Odontologia', code: '0007.0008' },
        { id: 3, name: 'Controlado', code: '0011' },
        { id: 4, name: 'Cosméticos', code: '0022' },
        { id: 5, name: 'Dentística', code: '0007.0004' },
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Categorias de Produtos</h1>
                    <p className="text-gray-500 dark:text-gray-400">Organize seus produtos em categorias hierárquicas</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg transition-colors">
                        Hierarquia
                    </button>
                    <Link
                        to="/app/inventory/new-product-category"
                        className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Plus size={20} />
                        Nova Categoria
                    </Link>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar categoria..."
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
                                <th className="w-10 py-3 px-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Nome</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Código (Hierarquia)</th>
                                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {categories.map((c) => (
                                <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                    </td>
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Folder size={18} className="text-gray-400" />
                                            {c.name}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300 font-mono text-sm">{c.code}</td>
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

export default ProductCategories;
