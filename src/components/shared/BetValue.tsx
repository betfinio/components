import { Bet } from '@/src/icons';
import { valueToNumber } from '@betfinio/abi';
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
	iconPosition?: 'left' | 'right';
	withMillify?: boolean;
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
	iconPosition = 'right',
	withMillify = true,
	className,
}) => {
	const amount: number = typeof value === 'bigint' ? valueToNumber(value) : value;
	const number = withMillify ? millify(amount, { precision }) : amount.toLocaleString('en');
	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className={cn(className, 'flex flex-row items-center cursor-pointer justify-start w-fit gap-1')}>
						{withIcon && iconPosition === 'left' && <Bet className={cn('w-4 h-4 stroke-0 text-primary', iconClassName)} />}
						{number}
						{withIcon && iconPosition === 'right' && <Bet className={cn('w-4 h-4 stroke-0 text-primary', iconClassName)} />}
					</div>
				</TooltipTrigger>
				<TooltipContent side={place} className={'bg-background-lighter text-white'}>
					{prefix} {amount.toLocaleString('en')} {postfix}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
