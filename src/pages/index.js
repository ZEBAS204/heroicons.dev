// import CarbonAds from "./CarbonAds"
import Apply from "lib/x/Apply"
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import Footer from "./_Footer"
import Reset from "lib/x/Reset"
import SVG from "components/SVG"
import svgToJSX from "utils/svgToJSX"
import target_blank from "lib/x/target_blank"
import Transition from "lib/x/Transition"
import tw from "lib/x/tailwindUnits"
import useHeroiconsReducer from "reducers/useHeroiconsReducer"

import BookOpenSVG from "heroicons-0.4.0/solid/BookOpen"
import ExternalLinkSVG from "heroicons-0.4.0/solid/ExternalLink"
import FlagSVG from "heroicons-0.4.0/solid/Flag"
import SearchOutlineSVG from "heroicons-0.4.0/outline/Search"
import SwitchHorizontalSVG from "heroicons-0.4.0/solid/SwitchHorizontal"

// <Apply className="-mt-16 transform scale-90">
// 	<h1
// 		className="font-medium tracking-tighter leading-none text-white"
// 		style={{
// 			fontSize: tw(16),
// 			fontFamily: "'DM Sans', var(--sans)",
// 			opacity: 0.875,
// 		}}
// 	>
// 		<span className="inline-flex flex-row items-center">
// 			<Apply className="w-16 h-16 opacity-50">
// 				<svg
// 					fill="none"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					strokeWidth={2}
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path d="M12 2.94385C14.3567 5.05846 17.4561 6.15176 20.618 5.98385C20.867 6.94785 21 7.95785 21 8.99985C21 14.5918 17.176 19.2898 12 20.6218C6.824 19.2898 3 14.5908 3 8.99985C2.99918 7.9824 3.12754 6.96896 3.382 5.98385C6.5439 6.15176 9.64327 5.05846 12 2.94385Z" />
// 				</svg>
// 			</Apply>{" "}
// 			<span style={{ width: "0.125ch" }} />
// 			<div className="relative">
// 				Heroicons
// 				<div className="pt-2 absolute inset-x-0 flex flex-row justify-center">
// 					<Reset style={{ font: "unset" }}>
// 						<div>
// 							<h6 className="font-semibold tracking-wider leading-none text-xs text-white opacity-75">
// 								UNOFFICIAL HEROICONS VIEWER
// 							</h6>
// 						</div>
// 					</Reset>
// 				</div>
// 			</div>
// 		</span>
// 	</h1>
// </Apply>

const HEADER_HGT = 560

const Header = () => {

	React.useEffect(() => {
		const handleScroll = () => {
			console.log(window.scrollY)

			const bgGrad = document.getElementById("bg-grad")
			const maskTop = document.getElementById("mask-top")
			const maskBtm = document.getElementById("mask-btm")
			bgGrad.style.opacity = 1 - (window.scrollY / HEADER_HGT)

			maskTop.style.opacity = 0
			if (window.scrollY >= HEADER_HGT - 96) {
				maskTop.style.opacity = 1
			}

			maskBtm.style.opacity = 0
			if (window.scrollY >= HEADER_HGT - 96) {
				maskBtm.style.opacity = 1
			}
		}
		window.addEventListener("scroll", handleScroll, false)
		return () => {
			window.removeEventListener("scroll", handleScroll, false)
		}
	}, [])

	// Canvas Gradient Animation by Luis Jose Rivera.
	//
	// Copyright (c) 2020 by Luis Jose Rivera (https://codepen.io/luisjoserivera/pen/oePeNy)
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	//
	React.useLayoutEffect(() => {
		try {
			const c = document.getElementById("canv")
			const $ = c.getContext("2d")
			const col = function(x, y, r, g, b) {
				$.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
				$.fillRect(x, y, 1, 1)
			}
			const R = function(x, y, t) {
				return 0 + Math.floor(60 * Math.cos((x * x - y * y) / 900))
			}
			const G = function(x, y, t) {
				return -127 + Math.floor(200 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 600))
			}
			const B = function(x, y, t) {
				// return 255 + Math.floor(20 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1200))
				return 255
			}
			let t = 0
			var run = function() {
				for (let x = 0; x < 32; x++) {
					for (let y = 0; y < 32; y++) {
						col(x, y, R(x, y, t), G(x, y, t), B(x, y, t))
					}
				}
				t += 0.05
				window.requestAnimationFrame(run)
			}
			run()
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<Apply className="relative">
			<header style={{ height: HEADER_HGT }}>

				{/* BG */}
				<div className="absolute inset-0" style={{ zIndex: -1 }}>
					<Reset className="w-full h-full">
						<div
							id="bg-grad"
							style={{ backgroundImage: "linear-gradient(to bottom, rgb(63, 0, 255), rgb(31, 0, 255))" }}
							// className="bg-gradient-to-br"
							// style={{
							// 	"--gradient-from-color": "rgb(60, 0, 255)",
							// 	"--gradient-to-color": "rgb(40, 72, 255)",
							// }}
							// width={32}
							// height={32}
						/>
					</Reset>
				</div>

				<div className="flex flex-col justify-center items-center h-full">

					<Apply className="-mt-14 transform scale-90">
						<div className="relative">
							<div className="pr-1 absolute right-full inset-y-0 flex flex-row items-center">
								<Apply className="w-14 h-14 text-white opacity-50">
									<svg
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 2.94385C14.3567 5.05846 17.4561 6.15176 20.618 5.98385C20.867 6.94785 21 7.95785 21 8.99985C21 14.5918 17.176 19.2898 12 20.6218C6.824 19.2898 3 14.5908 3 8.99985C2.99918 7.9824 3.12754 6.96896 3.382 5.98385C6.5439 6.15176 9.64327 5.05846 12 2.94385Z" />
									</svg>
								</Apply>
							</div>
							<h1
								className="font-medium tracking-tighter leading-none text-white"
								style={{
									fontSize: tw(14),
									fontFamily: "'DM Sans', var(--sans)",
									opacity: 0.875,
								}}
							>
								Heroicons
							</h1>
						</div>
					</Apply>

					<div className="h-1" />
					<h6 className="font-semibold tracking-wider leading-none text-xs text-white opacity-75">
						UNOFFICIAL HEROICONS VIEWER
					</h6>

				</div>

				{/* <div className="flex flex-row justify-center items-center h-full"> */}
				{/* 	<h1 */}
				{/* 		className="font-bold tracking-tight leading-none text-white" */}
				{/* 		style={{ */}
				{/* 			fontSize: tw(12), */}
				{/* 			fontFamily: "'DM Sans', var(--sans)", */}
				{/* 			opacity: 0.875, */}
				{/* 		}} */}
				{/* 	> */}
				{/* 		<span className="inline-flex flex-row items-center"> */}
				{/* 			Heroicons{" "} */}
				{/* 			<span style={{ width: "0.125ch" }} /> */}
				{/* 			<Apply className="w-12 h-12 opacity-25" style={{ marginTop: -4 }}> */}
				{/* 				<FlagSVG /> */}
				{/* 			</Apply> */}
				{/* 		</span> */}
				{/* 	</h1> */}
				{/* </div> */}

				{/* <div className="flex flex-row justify-center items-center h-full"> */}
				{/* 	<h1 */}
				{/* 		className="text-cool-gray-100" */}
				{/* 		style={{ */}
				{/* 			fontWeight: 700, */}
				{/* 			fontSize: tw(12), */}
				{/* 			fontFamily: "'DM Sans', var(--sans)", */}
				{/* 			letterSpacing: "-0.025em", */}
				{/* 		}} */}
				{/* 	> */}
				{/* 		<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}> */}
				{/* 			<FlagSVG className="w-12 h-12 text-indigo-500" /> */}
				{/* 		</div> */}
				{/* 	</h1> */}
				{/* </div> */}

			</header>
		</Apply>
	)

	//	return (
	//		<header className="flex flex-col items-center">
	//
	//			{/* Header */}
	//			<div className="relative flex flex-row items-center">
	//				<h1
	//					className="text-cool-gray-100"
	//					style={{
	//						fontWeight: 700,
	//						fontSize: tw(12),
	//						fontFamily: "'DM Sans', var(--sans)",
	//						letterSpacing: "-0.025em",
	//					}}
	//				>
	//					heroicons
	//				</h1>
	//				<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}>
	//					<FlagSVG className="w-12 h-12 text-indigo-500" />
	//				</div>
	//			</div>
	//
	//			{/* Subheader */}
	//			<h2 className="flex flex-row justify-center items-center flex-wrap text-center font-medium text-xl sm:text-2xl text-cool-gray-100">
	//				<BookOpenSVG className="mr-2 hidden sm:block w-8 h-8" />
	//					MIT open source icons by{" "}
	//				<span style={{ width: "0.25em" }} />
	//				<a
	//					className="inline-flex flex-row items-center underline"
	//					style={{ textDecorationColor: "var(--indigo-500)" }}
	//					href="https://twitter.com/steveschoger"
	//					{...target_blank}
	//				>
	//					{/* @steveschoger */}
	//						Steve Schoger{" "}
	//					<span style={{ width: "0.25em" }} />
	//					<ExternalLinkSVG className="-mb-1 w-5 h-5 text-indigo-400" />
	//				</a>
	//			</h2>
	//
	//		</header>
	//	)
}

// <... autoFocus /> does not work; use useAutoFocusOnMount.
function useAutoFocusOnMount(ref) {
	React.useEffect(() => {
		ref.current.focus()
	}, [])
}

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

	const handleClick = e => {

		// No-op when the user selected buttonRef.current text:
		const selection = document.getSelection()
		if (selection.rangeCount) {
			const range = selection.getRangeAt(0)
			if (!range.collapsed && buttonRef.current.contains(range.startContainer)) {
				// No-op
				return
			}
		}

		try {
			const originalEl = document.getElementById(icon.name)
			const el = originalEl.cloneNode(true)

			el.removeAttribute("id")
			el.classList.remove(...el.classList)
			el.classList.add(...`${icon.name} w-6 h-6`.split(" "))
			el.setAttribute("xmlns", "http://www.w3.org/2000/svg")

			// Remove unsorted attributes:
			const sortedAttrs = [...el.attributes].sort((a, b) => a.name.localeCompare(b.name))
			for (const each of sortedAttrs) {
				el.removeAttributeNode(each)
			}
			// Add sorted attributes:
			for (const each of sortedAttrs) {
				el.setAttributeNode(each)
			}

			copyToClipboardPolyfill(!state.form.copyAsReact ? el.outerHTML : svgToJSX(el.outerHTML))
			buttonRef.current.focus()
		} catch (error) {
			console.error(`copyToClipboardPolyfill: ${error}`)
		}

		const notifType = "icon"
		const notifInfo = {
			name: icon.name,
			icon: icon[!state.form.showOutline ? "solid" : "outline"],
		}
		dispatch({
			type: "UPDATE_NOTIFICATION",
			notifType,
			notifInfo,
		})

	}

	return (
		// <div className="!rounded-6 shadow-lg h-full">
		<button
			ref={buttonRef}
			className="flex flex-row justify-center items-center w-full h-full bg-transparent hover:bg-cool-gray-700 hover:bg-opacity-25 focus:outline-none shadow-none focus:shadow-solid-indigo select-text"
			style={{ boxShadow: "0 0 0 0.5px var(--black)" }}
			onClick={handleClick}
			aria-label={icon.name}
		>

			{/* New */}
			{icon.statusNew && (
				<div className="p-3 absolute top-0 right-0">
					<div className="px-2 py-1 bg-indigo-500 rounded-full transform scale-90 origin-top-right">
						<p className="font-semibold leading-none text-cool-gray-100" style={{ fontSize: "0.6875rem" }}>
							<span className="tracking-wider">NE</span>W
						</p>
					</div>
				</div>
			)}

			{/* Icon */}
			<SVG
				id={icon.name}
				className="w-8 h-8 text-cool-gray-100"
				svg={icon[!state.form.showOutline ? "solid" : "outline"]}
			/>

			{/* Icon name */}
			<div className="p-3 absolute bottom-0">
				<p className="text-center text-sm tracking-wide leading-tight text-cool-gray-200">
					{!state.form.search.safe || state.form.search.safe === "new" ? (
						icon.name
					) : (
						(([substr]) => (
							<>
								{substr}
								<span className="p-px text-black bg-yellow-200 rounded">
									{state.form.search.safe}
								</span>
								{icon.name.slice(substr.length + state.form.search.safe.length)}
							</>
						))(icon.name.split(state.form.search.safe, 1))
					)}
				</p>
			</div>

		</button>
		// </div>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form === next.state.form &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

// // TODO: Autofocus is broken?
// const FormSearch = ({ state, dispatch }) => {
// 	const inputRef = React.useRef()
//
// 	useAutoFocusOnMount(inputRef)
//
// 	// FXIME
// 	const [text, setText] = React.useState(() => {
// 		// if (!("URLSearchParams" in window)) {
// 		// 	return ""
// 		// }
// 		// const params = new URLSearchParams(window.location.search)
// 		// return params.get("search") || ""
//
// 		// FIXME
// 		return ""
// 	})
//
// 	const [tooltip, setTooltip] = React.useState("")
//
// 	// Debounces search.
// 	const mounted = React.useRef()
// 	React.useEffect(
// 		React.useCallback(() => {
// 			// Do not debounce the mount search:
// 			if (!mounted.current) {
// 				dispatch({
// 					type: "UPDATE_FORM_SEARCH",
// 					text,
// 				})
// 				mounted.current = true
// 				return
// 			}
// 			const id = setTimeout(() => {
// 				dispatch({
// 					type: "UPDATE_FORM_SEARCH",
// 					text,
// 				})
// 			}, 15)
// 			return () => {
// 				clearTimeout(id)
// 			}
// 		}, [text, dispatch]),
// 		[text],
// 	)
//
// 	// Sets the search query to the URL.
// 	//
// 	// https://stackoverflow.com/a/41542008
// 	React.useEffect(() => {
// 		// FIXME
// 		if (!("URLSearchParams" in window)) {
// 			// No-op
// 			return
// 		}
// 		if (!text) {
// 			window.history.pushState(null, "", "/")
// 		} else {
// 			const params = new URLSearchParams(window.location.search)
// 			params.set("search", text)
// 			window.history.pushState(null, "", `/?${params}`)
// 		}
// 	}, [text])
//
// 	// <Esc> shortcuts.
// 	React.useEffect(() => {
// 		const handler = e => {
// 			if (e.keyCode === 27 || e.key === "Escape") {
// 				e.preventDefault()
// 				if (document.activeElement !== inputRef.current) {
// 					inputRef.current.focus()
// 				} else {
// 					if (!text) {
// 						inputRef.current.blur()
// 						return
// 					}
// 					setText("")
// 				}
// 			}
// 		}
// 		document.addEventListener("keydown", handler)
// 		return () => {
// 			document.removeEventListener("keydown", handler)
// 		}
// 	}, [text])
//
// 	return (
// 		<div
// 			className="!-mt-4 !pt-4 static sm:sticky top-0 z-30"
// 			style={{
// 				// marginLeft: -3,
// 				// marginRight: -3,
// 				boxShadow: `inset 0 ${tw((18 + 4) / 2)} var(--black)`,
// 			}}
// 		>
// 			{/* TODO: Add comment about z-10 */}
// 			<form className="relative z-10" onSubmit={e => e.preventDefault()}>
//
// 				{/* Search bar LHS */}
// 				<div className="px-6 absolute inset-y-0 left-0 pointer-events-none">
// 					<div className="pl-2 flex flex-row items-center h-full">
// 						<SearchOutlineSVG className="w-6 h-6 text-cool-gray-400 transition duration-200 ease-in-out" />
// 					</div>
// 				</div>
//
// 				{/* Search bar */}
// 				<div className="rounded-6 shadow-lg">
// 					<div className="rounded-6 shadow-lg">
// 						<label>
// 							<Reset className="appearance-none w-full">
// 								<input
// 									ref={inputRef}
// 									className="pl-20 pr-36 block w-full h-18 text-xl placeholder-cool-gray-400 text-cool-gray-100 bg-cool-gray-800 rounded-6 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out"
// 									style={{ height: tw(18) }}
// 									type="text"
// 									placeholder="Search Heroicons"
// 									value={text}
// 									onChange={e => setText(e.target.value)}
// 									aria-label="Search 224 Icons"
// 									{...disableAutoCorrect}
// 								/>
// 							</Reset>
// 						</label>
// 					</div>
// 				</div>
//
// 				{/* Search bar RHS */}
// 				<div className="px-6 absolute inset-y-0 right-0">
// 					<div className="pr-2 flex flex-row items-center h-full">
//
// 						<div
// 							className="flex flex-row items-center"
// 							style={{ paddingRight: tw(1) }}
// 							onFocus={e => setTooltip("jsx")}
// 							onBlur={e => setTooltip("")}
// 							onMouseEnter={e => setTooltip("jsx")}
// 							onMouseLeave={e => setTooltip("")}
// 						>
// 							<button
// 								className="p-2 relative text-cool-gray-400 hover:bg-cool-gray-700 focus:bg-cool-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
// 								style={{
// 									color: state.form.copyAsReact && "var(--cool-gray-100)",
// 									backgroundColor: state.form.copyAsReact && "var(--indigo-500)",
// 								}}
// 								onClick={e => {
// 									dispatch({
// 										type: "TOGGLE_FORM_COPY_AS_REACT",
// 										text,
// 									})
// 								}}
// 								aria-label={
// 									!state.form.copyAsReact
// 										? "Click to Enable Copy as JSX"
// 										: "Click to Enable Copy as HTML"
// 								}
// 							>
// 								{tooltip === "jsx" && (
// 									<div className="pt-2 absolute top-full right-0 z-40">
// 										<div className="rounded-md shadow-lg">
// 											<div className="rounded-md shadow-lg">
// 												<div className="px-3 py-2 relative bg-cool-gray-700 rounded-md">
// 													<p className="whitespace-pre font-medium text-sm text-cool-gray-100">
// 														{!state.form.copyAsReact
// 															? "Click to Enable Copy as JSX"
// 															: "Click to Enable Copy as HTML"
// 														}
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								)}
// 								{/* <CodeSVG className="w-6 h-6" /> */}
// 								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// 									<path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
// 								</svg>
// 							</button>
// 						</div>
//
// 						<div
// 							className="flex flex-row items-center"
// 							style={{ paddingLeft: tw(1) }}
// 							onFocus={e => setTooltip("alt")}
// 							onBlur={e => setTooltip("")}
// 							onMouseEnter={e => setTooltip("alt")}
// 							onMouseLeave={e => setTooltip("")}
// 						>
// 							<button
// 								className="p-2 relative text-cool-gray-400 hover:bg-cool-gray-700 focus:bg-cool-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
// 								style={{
// 									color: state.form.showOutline && "var(--cool-gray-100)",
// 									backgroundColor: state.form.showOutline && "var(--indigo-500)",
// 								}}
// 								onClick={e => {
// 									dispatch({
// 										type: "TOGGLE_FORM_SHOW_OUTLINE",
// 										text,
// 									})
// 								}}
// 								aria-label={
// 									!state.form.showOutline
// 										? "Click to Switch to Outline Icons"
// 										: "Click to Switch to Solid Icons"
// 								}
// 							>
// 								{tooltip === "alt" && (
// 									<div className="pt-2 absolute top-full right-0 z-40">
// 										<div className="rounded-md shadow-lg">
// 											<div className="rounded-md shadow-lg">
// 												<div className="px-3 py-2 relative bg-cool-gray-700 rounded-md">
// 													<p className="whitespace-pre font-medium text-sm text-cool-gray-100">
// 														{!state.form.showOutline
// 															? "Click to Switch to Outline Icons"
// 															: "Click to Switch to Solid Icons"
// 														}
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								)}
// 								{/* <SVG className="w-6 h-6" svg={!state.form.showOutline ? PlusCircleSolidSVG : PlusCircleOutlineSVG} /> */}
// 								<SwitchHorizontalSVG className="w-6 h-6" />
// 							</button>
// 						</div>
//
// 					</div>
// 				</div>
//
// 			</form>
//
// 		</div>
// 	)
// }

// {false && (
// 	// {!state.results.length && (
// 		<div className="flex flex-col justify-center items-center h-full">
//
// 			<p className="flex flex-row items-baseline font-medium text-xl text-center text-cool-gray-200">
// 				No results for “
// 				{/* <span className="inline-block truncate" style={{ maxWidth: media.xs ? 128 : 256 }}> */}
// 				{/* FIXME */}
// 				<span className="inline-block truncate" style={{ maxWidth: 256 }}>
// 					{state.form.search.user}.
// 				</span>”
// 			</p>
//
// 			<p className="font-medium text-xl text-center text-cool-gray-200">
// 				Try again or{" "}
// 				<a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://github.com/tailwindlabs/heroicons/issues" {...target_blank}>
// 					request an icon
// 				</a>
// 				.
// 			</p>
//
// 		</div>
// 	// )}
// )}

// <div className="w-4" />
// <div className="w-96 bg-cool-gray-800 rounded-6">
const Main = () => {
	const [state, dispatch] = useHeroiconsReducer()

	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				dispatch({
					type: "HIDE_NOTIFICATION",
				})
			}, 2.2e3)
			return () => {
				clearTimeout(id)
			}
		}, [dispatch]),
		[state.notif.showKey],
	)

	return (
		// TODO: -mx-4?
		<div className="flex flex-row items-start">

			<main className="flex-1">
				<div className="rounded-6 shadow-lg">
					<div className="bg-cool-gray-800 rounded-6 shadow-lg">

						<div
							id="mask-top"
							className="-mb-6 sticky h-6 rounded-t-6 z-10"
							style={{
								top: tw(4),
								boxShadow: `0 -${tw(4)} 0 ${tw(4)} var(--black)`,
							}}
						>
							<div
								className="h-full rounded-t-6"
								style={{
									clipPath: "inset(-2px -2px 0 -2px)",
									boxShadow: "0 0 0 2px var(--black)",
								}}
							/>
						</div>

						<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
							{state.results.length > 0 && (
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 overflow-hidden">
									{state.results.map((each, x) => (
										<div key={each.name} className="relative" style={{ paddingBottom: "100%" }}>
											<div className="absolute inset-0">
												<MemoIcon
													state={state}
													dispatch={dispatch}
													icon={each}
												/>
											</div>
										</div>
									))}
								</div>
							)}
						</DocumentTitle>

						<div
							id="mask-btm"
							className="-mt-6 sticky h-6 rounded-b-6 z-10"
							style={{
								bottom: tw(4),
								boxShadow: `0 ${tw(4)} 0 ${tw(4)} var(--black)`,
							}}
						>
							<div
								className="h-full rounded-b-6"
								style={{
									clipPath: "inset(0 -2px -2px -2px)",
									boxShadow: "0 0 0 2px var(--black)",
								}}
							/>
						</div>

					</div>
				</div>
			</main>

			<div className="w-6" />
			<aside className="sticky" style={{ top: tw(4) }}>
				<div className="rounded-6 shadow-lg">
					<div className="w-96 bg-cool-gray-800 rounded-6 shadow-lg">

						<div className="h-20">
						</div>

						<hr className="border-t border-black" />
						<div className="h-20">
						</div>

						<hr className="border-t border-black" />
						<div className="h-20">
						</div>

						<hr className="border-t border-black" />
						<div className="h-40">
						</div>

					</div>
				</div>
			</aside>

		</div>
	)
}

// {/* Notification */}
// <Transition
// 	on={state.notif.showKey}
// 	className="transition duration-200 ease-in-out"
// 	from="opacity-0 transform translate-y-4 pointer-events-none"
// 	to="opacity-100 transform translate-y-0 pointer-events-auto"
// >
// 	<div className="p-3 fixed bottom-0 left-0 z-40">
// 		<div className="rounded-md shadow-lg">
// 			<div className="rounded-md shadow-lg">
// 				<div className="px-3 py-2 flex flex-row bg-indigo-500 rounded-md">
//
// 					{state.notif.notifInfo && (
// 						<div className="flex flex-row items-center h-6">
// 							<SVG className="mr-3 w-5 h-5 text-indigo-50" svg={state.notif.notifInfo.icon} />
// 						</div>
// 					)}
//
// 					{/* Form */}
// 					{state.notif.notifType.startsWith("form") && (
// 						<p className="font-semibold text-indigo-50">
// 							{state.notif.notifType === "form-jsx" && (
// 								!state.form.copyAsReact
// 									? "Enabled Copy as HTML"
// 									: "Enabled Copy as JSX"
// 							)}
// 							{state.notif.notifType === "form-alt" && (
// 								!state.form.showOutline
// 									? "Switched to Solid Icons"
// 									: "Switched to Outline Icons"
// 							)}
// 						</p>
// 					)}
//
// 					{/* Icon */}
// 					{state.notif.notifType === "icon" && (
// 						<p className="font-semibold text-indigo-50">
// 								Copied{" "}
// 							<span className="font-mono">
// 								{state.notif.notifInfo.name}
// 							</span>{" "}
// 								as {!state.form.copyAsReact ? "HTML" : "JSX"}
// 						</p>
// 					)}
//
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </Transition>

const LayoutFragment = () => (
	<>

		{/* <div className="h-32" /> */}
		<section>
			<Header />
		</section>

		{/* <div className="h-24" /> */}
		<section className="-mt-16 flex flex-row justify-center !z-10">
			<div className="w-full max-w-screen-xl z-10">
				<Main />
			</div>
		</section>

		<div className="h-24" />
		<div className="h-2 bg-cool-gray-800" />
		<section>
			<Footer />
		</section>

	</>
)

export default LayoutFragment
