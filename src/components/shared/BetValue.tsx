import { valueToNumber } from '@betfinio/abi';
import { Bet } from '@betfinio/ui/dist/icons';
import { millify } from 'millify';
import type { FC } from 'react';
import * as React from 'react';
import { cn } from '../../lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export interface BetValueProps {
	value: number | bigint;
	withIcon?: boolean;
	precision?: number;
	place?: 'top' | 'bottom' | 'left' | 'right';
	prefix?: string;
	postfix?: string;
	iconClassName?: string;
	className?: string;
}

export const BetValue: FC<BetValueProps> = ({
	value,
	prefix = '',
	place = 'top',
	precision = 2,
	withIcon = false,
	iconClassName = '',
	postfix = ' BET',
	className,
}) => {
	const amount: number = typeof value === 'bigint' ? valueToNumber(value) : value;
	const number = millify(amount, { precision });
	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className={cn(className, 'flex flex-row items-center cursor-pointer justify-start w-fit gap-1')}>
						{number}
						{withIcon && <Bet className={cn('w-4 h-4 stroke-0 text-primary', iconClassName)} />}
					</div>
				</TooltipTrigger>
				<TooltipContent side={place} className={'bg-background-lighter text-white'}>
					{prefix} {amount.toLocaleString('en')} {postfix}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
