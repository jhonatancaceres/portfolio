import React, { useState, type JSX } from 'react';

interface ButtonItem {
  key: string;
  label: string;
  icon: JSX.Element;
}

interface ButtonLineGroupProps {
  items: ButtonItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
}

export const ButtonLineGroup: React.FC<ButtonLineGroupProps> = ({
  items,
  activeKey: controlledActiveKey,
  onChange,
  className = ''
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState<string>(items[0]?.key || '');

  // Use controlled value if provided, otherwise use internal state
  const activeKey = controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;

  const handleButtonClick = (key: string) => {
    if (controlledActiveKey === undefined) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  return (
    <div className={`inline-flex rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
      {items.map((item, index) => {

        const isActive = activeKey === item.key;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <button
            key={item.key}
            onClick={() => handleButtonClick(item.key)}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200
              ${isFirst ? 'rounded-l-lg' : ''}
              ${isLast ? 'rounded-r-lg' : ''}
              ${!isFirst ? 'border-l border-gray-200' : ''}
              ${isActive
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >

            <span className="w-4 h-4">
              {item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </div>
  );
};