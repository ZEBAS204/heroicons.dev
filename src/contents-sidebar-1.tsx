import * as styled from "./css/bindings"

import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, SVGAttributes, useCallback, useContext, useEffect, useRef, useTransition } from "react"
import { AriaButton } from "./aria/aria-button"
import { cache } from "./cache"
import { ArrowTopRightOnSquareIcon, FigmaIcon, GitHubIcon, HeartIcon, HeroiconsLogomarkIcon, HeroiconsLogotextIcon, LightningIcon, PencilSquareIcon, ScaleIcon, TwitterIcon } from "./icon-config"
import { Icon } from "./lib/react/icon"
import { DispatchProgressBarContext } from "./progress-bar"
import { SearchContext, SetSearchContext } from "./state"
import { IconsetValue } from "./types"

function MenuTitle({ children }: PropsWithChildren) {
	return <>
		<div className="px-$sidebar-1-inset-x flex align-center h-36">
			<styled.TypographyCaps className="color-$soft-fill-color">
				{children}
			</styled.TypographyCaps>
		</div>
	</>
}

function MenuItem({ icon, children, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-$sidebar-1-inset-x flex align-center gap-10 h-36 [&:hover,_[role=button][data-active=true]_&]:bg-color-$base-gray-color">
				<Icon className="h-20 h-20 color-$trim-color" icon={icon} />
				<styled.TypographyCaps className="color-$fill-color">
					{children}
				</styled.TypographyCaps>
			</div>
		</AriaButton>
	</>
}

function NavLink({ icon, children, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <>
		<a className="px-$sidebar-1-inset-x flex align-center gap-10 h-36 [&:hover]:bg-color-$base-gray-color" {...props}>
			<Icon className="h-20 w-20" icon={icon} />
			{children}
		</a>
	</>
}

export function Sidebar1Contents() {
	const { iconset } = useContext(SearchContext)!
	const { start, end } = useContext(DispatchProgressBarContext)!
	const { setIconset: _setIconset } = useContext(SetSearchContext)!

	const [pending, startTransition] = useTransition()

	const setIconset = useCallback((iconset: IconsetValue) => {
		const transition = cache.has(iconset)
			? (fn: () => void) => fn()
			: startTransition
		transition(() => {
			_setIconset(iconset)
		})
	}, [_setIconset])

	const onceRef = useRef(false)
	useEffect(() => {
		if (!onceRef.current) {
			onceRef.current = true
			return
		}
		if (pending) {
			start()
		} else {
			end()
		}
	}, [end, pending, start])

	return <>
		<section className="absolute inset-t-0 py-$inset-y pb-$sidebar-1-inset-y">
			<div className="px-$sidebar-1-inset-x flex flex-col gap-16 h-calc($inset-y_+_$search-bar-height)">
				<div className="flex align-center gap-6">
					<HeroiconsLogomarkIcon className="h-24 w-24 color-$trim-color [transform]-translateY(15%)" />
					<HeroiconsLogotextIcon className="h-20 color-$hard-fill-color" />
				</div>
				<styled.TypographySans className="color-$fill-color">
					<span className="inline-flex align-baseline gap-6">
						<Icon className="h-16 w-16 color-$hard-fill-color [transform]-translateY(15%)"
							icon={ScaleIcon} />
						MIT-licensed
					</span>{" "}
					open source icons by{" "}
					<a
						className="inline-flex align-baseline gap-6 color-$anchor-blue [&:hover]:[text-decoration]-underline"
						href="https://twitter.com/steveschoger"
						rel="noopener noreferrer"
						target="_blank"
					>
						@steveschoger
						<Icon className="h-16 w-16 [stroke-width]-2 color-$anchor-blue [transform]-translateY(15%)"
							icon={ArrowTopRightOnSquareIcon} />
					</a>
				</styled.TypographySans>
			</div>
			<div className="flex flex-col gap-16">
				<div>
					<MenuTitle>
						VERSION 2
					</MenuTitle>
					<MenuItem
						icon={LightningIcon.V2_20_solid}
						onClick={e => setIconset("v2-20-solid")}
						data-active={iconset === "v2-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v2_24_outline}
						onClick={e => setIconset("v2-24-outline")}
						data-active={iconset === "v2-24-outline"}
					>
						24 PX OUTLINE
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v2_24_solid}
						onClick={e => setIconset("v2-24-solid")}
						data-active={iconset === "v2-24-solid"}
					>
						24 PX SOLID
					</MenuItem>
				</div>
				<div>
					<MenuTitle>
						VERSION 1 (LEGACY)
					</MenuTitle>
					<MenuItem
						icon={LightningIcon.v1_20_solid}
						onClick={e => setIconset("v1-20-solid")}
						data-active={iconset === "v1-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v1_24_outline}
						onClick={e => setIconset("v1-24-outline")}
						data-active={iconset === "v1-24-outline"}
					>
						24 PX OUTLINE
					</MenuItem>
				</div>
			</div>
		</section>
		<section className="absolute inset-b-0 py-$inset-y pt-$sidebar-1-inset-y flex flex-col gap-16 bg-color-$base-color">
			<nav>
				<NavLink
					icon={GitHubIcon}
					href="https://github.com/tailwindlabs/heroicons"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans className="color-$fill-color">
						<span className="inline-flex align-baseline gap-6">
							GitHub
							<Icon className="h-16 w-16 [stroke-width]-2 color-$anchor-blue [transform]-translateY(15%)"
								icon={ArrowTopRightOnSquareIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					icon={FigmaIcon}
					href="https://figma.com/community/file/1143911270904274171"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans className="color-$fill-color">
						<span className="inline-flex align-baseline gap-6">
							Figma
							<Icon className="h-16 w-16 [stroke-width]-2 color-$anchor-blue [transform]-translateY(15%)"
								icon={ArrowTopRightOnSquareIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					icon={TwitterIcon}
					href={`http://twitter.com/intent/tweet?text=${encodeURI("Check out Hericons 💯\n\nThanks @steveschoger for designing Heroicons and @username_ZAYDEK for the new heroicons.dev\n\nheroicons.dev")}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans className="color-$fill-color">
						<span className="inline-flex align-baseline gap-6">
							Share on Twitter
							<Icon className="h-16 w-16 [stroke-width]-2 color-$anchor-blue [transform]-translateY(15%)"
								icon={PencilSquareIcon} />
							{/* Use [transform]-translateY(20%) for alignment */}
							<Icon className="h-20 w-20 [stroke-width]-2 color-$twitter-blue [transform]-translateY(20%)"
								icon={HeartIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
			</nav>
			<div className="px-$sidebar-1-inset-x">
				<styled.TypographySans className="color-$fill-color">
					Website design and app by
					<a
						className="inline-flex align-baseline gap-6 color-$anchor-blue [&:hover]:[text-decoration]-underline"
						href="https://twitter.com/username_ZAYDEK"
						rel="noopener noreferrer"
						target="_blank"
					>
						@username_ZAYDEK
						<Icon className="h-16 w-16 [stroke-width]-2 color-$anchor-blue [transform]-translateY(15%)"
							icon={ArrowTopRightOnSquareIcon} />
					</a>
				</styled.TypographySans>
			</div>
			<div className="px-$sidebar-1-inset-x">
				<styled.TypographySmallSans className="color-$soft-fill-color">
					Heroicons are{" "}
					<span className="inline-flex align-baseline gap-6">
						MIT-licensed.
						<Icon className="h-16 w-16 color-$fill-color [transform]-translateY(15%)"
							icon={ScaleIcon} />
					</span>
					You may use them for commercial and personal application without attribution.
				</styled.TypographySmallSans>
			</div>
		</section>
	</>
}