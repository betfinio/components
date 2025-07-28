import type { Meta, StoryObj } from '@storybook/react';
import { BookOpenIcon, ChevronDown, Globe, HeadphonesIcon, MessageCircleIcon } from 'lucide-react';
// biome-ignore lint/correctness/noUnusedImports: todo
import * as React from 'react';
import { Button } from '../src/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../src/components/ui/collapsible';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { Separator } from '../src/components/ui/separator';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
} from '../src/components/ui/sidebar';
import { Bet, BetfinLogo, Lobby, LuckyRound, Predict, Roulette, Stones, Ticket } from '../src/icons';
import { cn } from '../src/lib/utils';

const meta: Meta<typeof Sidebar> = {
	title: 'Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<SidebarProvider defaultOpen>
				<div className="flex min-h-screen">
					<Story />
					<main className="flex-1 p-8">
						<h1 className="text-2xl font-bold">Main Content</h1>
						<p className="mt-4">
							This is the main content area. The sidebar can be toggled using the button in the top-left corner or by pressing Cmd/Ctrl + B.
						</p>
					</main>
				</div>
			</SidebarProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	render: () => {
		const languages = {
			en: 'English',
			de: 'German',
			fr: 'French',
			es: 'Spanish',
		};
		const language = 'en';

		const { state } = useSidebar();

		const minimized = state === 'collapsed';

		return (
			<Sidebar variant="floating" collapsible="icon">
				<SidebarHeader>
					<div className="flex items-center justify-between p-2">
						<BetfinLogo className="w-24" />
						<SidebarTrigger />
					</div>
					<Separator />
				</SidebarHeader>

				<SidebarContent>
					<SidebarMenu className="gap-2">
						<MockWidget />
						<Button variant="outline" className="w-full rounded-lg border-primary gap-1">
							<Bet className="size-4 text-primary" />
							Buy BET
						</Button>
						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Lobby">
								<Lobby />
								<span>Lobby</span>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Crypto Predict">
								<Predict />
								<span>Crypto Predict</span>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<Collapsible className="group/collapsible">
							<SidebarGroup>
								<SidebarGroupLabel>
									<CollapsibleTrigger className="flex gap-2 p-2 h-10 w-full items-center">
										<Roulette className="size-4" />
										<span>Roulette</span>
										<div className="flex grow justify-end">
											<ChevronDown className="size-4 bg-foreground/20 rounded-sm transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</div>
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent className="gap-1 flex flex-col bg-sidebar-item/10 p-2 rounded-lg rounded-t-none">
										<SidebarMenuItem>
											<SidebarMenuButton tooltip="1.5 mins">
												<span>1.5 min</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton tooltip="3 mins">
												<span>3 min</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton tooltip="Single player">
												<span>Single player</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>

						<Collapsible className="group/collapsible">
							<SidebarGroup>
								<SidebarGroupLabel>
									<CollapsibleTrigger className="flex gap-2 p-2 h-10 w-full items-center">
										<LuckyRound className="size-4" />
										<span>Lucky Round</span>
										<div className="flex grow justify-end">
											<ChevronDown className="size-4 bg-foreground/20 rounded-sm transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</div>
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent className="gap-1 flex flex-col bg-sidebar-item/10 p-2 rounded-lg rounded-t-none">
										<SidebarMenuItem>
											<SidebarMenuButton tooltip="5 mins">
												<span>5 min</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton tooltip="1 day">
												<span>1 day</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>

						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Stones">
								<Stones />
								<span>Stones</span>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Lotto">
								<Ticket className="text-foreground" />
								<span>Lotto</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>

				<SidebarFooter>
					<SidebarMenu className="gap-2">
						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Documentation">
								<BookOpenIcon className="text-foreground" />
								<span>Documentation</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton tooltip="FAQ">
								<MessageCircleIcon className="text-foreground" />
								<span>FAQ</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton tooltip="Support">
								<HeadphonesIcon className="text-foreground" />
								<span>Support</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<Select value={language}>
							<SelectTrigger className="w-full" minimized={minimized}>
								<div className={'flex flex-row items-center justify-start gap-2'}>
									<Globe className={cn('size-4')} />
									<SelectValue placeholder={'Language'} />
								</div>
							</SelectTrigger>
							<SelectContent>
								{Object.keys(languages).map((lang) => (
									<SelectItem key={lang} value={lang}>
										{languages[lang]}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		);
	},
};

const MockWidget = () => {
	return <div className="w-full h-40 border border-border flex items-center justify-center rounded-lg">widget</div>;
};
