import { SearchIcon, XIcon } from 'lucide-react';
import { type FC, useCallback, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Input } from './input';

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	debounceMs?: number;
	placeholder?: string;
	className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange, debounceMs = 300, placeholder = 'Search', className }) => {
	const [search, setSearch] = useState(value);
	const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

	const debouncedOnChange = useCallback(
		(value: string) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				onChange(value);
			}, debounceMs);
		},
		[onChange, debounceMs],
	);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setSearch(newValue);
			debouncedOnChange(newValue);
		},
		[debouncedOnChange],
	);

	const handleClear = useCallback(() => {
		setSearch('');
		onChange('');
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}, [onChange]);

	return (
		<div className="relative">
			<SearchIcon className="absolute size-4 left-2 top-1/2 -translate-y-1/2" />
			<Input value={search} onChange={handleChange} type="text" placeholder={placeholder} className={cn('pl-8! pr-8!', className)} />
			{!!search && (
				<XIcon className="cursor-pointer absolute size-4 right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={handleClear} />
			)}
		</div>
	);
};
