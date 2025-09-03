import React, { useState } from 'react';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { ContactCard } from './ContactCard';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { useContactsPagination } from '../hooks/useContactsPagination';
import { ContactsHeader } from './ContactsHeader';
import { GridExample } from './ContactsGrid';

type ViewModeT = 'card' | 'table';

const ContactsContainer: React.FC = () => {

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, isError, error }
    = useContactsPagination();

  const [viewMode, setViewMode] = useState<ViewModeT>('card');

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  const allContacts = data?.pages.flatMap(page => page.records) || [];

  return (
    <div>

      <ContactsHeader<ViewModeT> onViewChange={(view) => setViewMode(view)} />
      {viewMode == 'table' && <GridExample />}

      {viewMode == 'card' &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {allContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      }

      {hasNextPage && (
        <div className="text-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}

    </div>
  );
};

export default ContactsContainer;