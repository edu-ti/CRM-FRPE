import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewProductCatalog = () => {
    const navigate = useNavigate();

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
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Cadastro de Catálogo</h1>
                        <p className="text-gray-500 dark:text-gray-400">Crie um novo catálogo de produtos</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button className="px-4 py-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white rounded-lg flex items-center gap-2 transition-colors">
                        <Save size={20} />
                        Salvar Catálogo
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Empresa *</label>
                        <input type="text" value="BEMED ATACADISTA" readOnly className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 cursor-not-allowed" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome do Catálogo *</label>
                        <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Depósito *</label>
                        <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                            <option value="">Selecione...</option>
                            <option value="padrao">Padrão</option>
                            <option value="filial">Filial</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tabela de Preço *</label>
                        <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                            <option value="">Selecione...</option>
                            <option value="distribuidor">Distribuidor</option>
                            <option value="varejo">Varejo</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria (Opcional)</label>
                        <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                            <option value="">Selecione para filtrar produtos...</option>
                            <option value="odonto">Odonto</option>
                            <option value="medico">Médico</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 flex items-center gap-6 mt-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Exibir apenas itens com saldo em estoque</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Ocultar Preço</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductCatalog;
