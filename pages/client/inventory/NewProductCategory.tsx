import React from 'react';
import { ArrowLeft, Save, Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewProductCategory = () => {
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
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Nova Categoria</h1>
                        <p className="text-gray-500 dark:text-gray-400">Adicione uma categoria hierárquica</p>
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

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Tree (Visual representation from screenshot) */}
                <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 hidden lg:block">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categorias Existentes</h3>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 pl-2 border-l-2 border-gray-100 dark:border-gray-700">
                        <div className="pl-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">ODONTO</div>
                        <div className="pl-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">Descartáveis</div>
                        <div className="pl-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">Medicamentos</div>
                        <div className="pl-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">Saneantes</div>
                        <div className="pl-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">MÉDICO</div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome da Categoria *</label>
                            <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria Pai (Opcional)</label>
                            <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white">
                                <option value="">Nenhuma (Raiz)</option>
                                <option value="odonto">ODONTO</option>
                                <option value="medico">MÉDICO</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição</label>
                            <textarea rows={4} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:text-white resize-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Imagem de Capa</label>
                            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer">
                                <Paperclip className="mx-auto text-gray-400 mb-2" size={32} />
                                <p className="text-sm text-gray-500">Clique para anexar uma imagem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductCategory;
