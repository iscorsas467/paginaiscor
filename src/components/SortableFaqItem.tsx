'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PencilIcon, TrashIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

interface SortableFaqItemProps {
  item: FaqItem;
  onEdit: () => void;
  onDelete: () => void;
}

export default function SortableFaqItem({ item, onEdit, onDelete }: SortableFaqItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ${
        isDragging ? 'opacity-50 shadow-lg' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        {/* Drag Handle */}
        <div
          {...attributes}
          {...listeners}
          className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
        >
          <Bars3Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
            {item.question}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.answer}
          </p>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <button
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
            title="Editar pregunta"
          >
            <PencilIcon className="h-4 w-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
            title="Eliminar pregunta"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
