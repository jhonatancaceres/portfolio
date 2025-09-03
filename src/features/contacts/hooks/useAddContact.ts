// For mutations in v5
/*import { useMutation } from '@tanstack/react-query';

const addUser = async (userData: Partial<User>): Promise<User> => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to add user');
  return response.json();
};

export const useAddUser = () => {
  return useMutation<User, Error, Partial<User>>({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch users query
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};*/