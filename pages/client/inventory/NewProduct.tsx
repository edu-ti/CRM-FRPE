import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dados');

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
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Cadastro de Produto</h1>
                        <p className="text-gray-500 dark:text-gray-400">Preencha as informações do novo produto</p>
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
                        Salvar
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-100 dark:border-gray-700">
                    <button
                        onClick={() => setActiveTab('dados')}
                        className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'dados'
                                ? 'border-b-2 border-[#6C63FF] text-[#6C63FF]'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        Dados
                    </button>
                    <button
                        onClick={() => setActiveTab('fiscal')}
                        className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'fiscal'
                                ? 'border-b-2 border-[#6C63FF] text-[#6C63FF]'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        Fiscal
                    </button>
                    <button
                        onClick={() => setActiveTab('composicao')}
                        className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'composicao'
                                ? 'border-b-2 border-[#6C63FF] text-[#6C63FF]'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        Composição
                    </button>
                    <button
                        onClick={() => setActiveTab('qualidade')}
                        className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'qualidade'
                                ? 'border-b-2 border-[#6C63FF] text-[#6C63FF]'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        Qualidade
                    </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    {activeTab === 'dados' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome do Produto *</label>
                                <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Código SKU</label>
                                <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Código de Barras (EAN)</label>
                                <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria</label>
                                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                    <option value="">Selecione...</option>
                                    <option value="medicamentos">Medicamentos</option>
                                    <option value="materiais">Materiais</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Unidade de Medida</label>
                                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                    <option value="">Selecione...</option>
                                    <option value="un">Unidade (UN)</option>
                                    <option value="cx">Caixa (CX)</option>
                                    <option value="kg">Quilo (KG)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preço de Custo (R$)</label>
                                <input type="number" step="0.01" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preço de Venda (R$)</label>
                                <input type="number" step="0.01" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição Detalhada</label>
                                <textarea rows={4} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white resize-none"></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">Controlar Estoque</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" defaultChecked />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">Ativo</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#6C63FF] focus:ring-[#6C63FF]" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">Venda no E-commerce</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'fiscal' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NCM</label>
                                    <input type="text" placeholder="Código NCM" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CEST</label>
                                    <input type="text" placeholder="Código CEST" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Origem do Produto</label>
                                    <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                        <option value="0">0 - Nacional</option>
                                        <option value="1">1 - Estrangeira (Importação direta)</option>
                                        <option value="2">2 - Estrangeira (Adquirida no mercado interno)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Grupo Tributário</label>
                                    <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                        <option value="">Padrão</option>
                                        <option value="isento">Isento</option>
                                    </select>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Peso e Dimensões</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Peso Líquido (kg)</label>
                                        <input type="number" step="0.001" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Peso Bruto (kg)</label>
                                        <input type="number" step="0.001" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'composicao' && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer">
                                    <div className="w-6 h-6 bg-white rounded-full shadow-md border border-gray-200 absolute left-0 top-0 transition-all"></div>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">Este produto é um KIT?</span>
                            </div>

                            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400 mb-4">Habilite a opção acima para adicionar produtos à composição.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'qualidade' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nível de Complexidade</label>
                                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                    <option value="01">01 - Baixa</option>
                                    <option value="02">02 - Média</option>
                                    <option value="03">03 - Alta</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nível de Prioridade</label>
                                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                    <option value="01">01 - Normal</option>
                                    <option value="02">02 - Urgente</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição do Padrão de Qualidade</label>
                                <textarea rows={3} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white resize-none"></textarea>
                            </div>
                            <div>
                                <button className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium px-4 py-2 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                                    Adicionar Parâmetro
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
