import Apply from "lib/x/Apply"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import px from "lib/x/pxToRem"
import Reset from "lib/x/Reset"
import target_blank from "lib/x/target_blank"
import tw from "lib/x/twToRem"

import SVGBeaker from "heroicons-0.4.1/solid/Beaker"
import SVGBookOpen from "heroicons-0.4.1/solid/BookOpen"
import SVGDownload from "heroicons-0.4.1/solid/Download"
import SVGExternalLink from "heroicons-0.4.1/solid/ExternalLink"
import SVGFlag from "heroicons-0.4.1/solid/Flag"

import SVGSearchOutline from "heroicons-0.4.1/outline/Search"

const HeroiconsLogo = () => (
	<div className="relative">
		<Apply className="h-14">
			<svg fill="currentColor" viewBox="0 0 240 56" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M23.856 19.2222V30.4883H9.68802V19.2241H3.75201V30.4883V34.5203V47.0001H9.68802V34.5203H23.856V46.9982H29.792V34.5203V30.4883V19.2222H23.856Z" />
				<path d="M46.9706 47.6722C44.2453 47.6722 41.8186 47.0748 39.6906 45.8802C37.5999 44.6482 35.9572 42.9495 34.7626 40.7842C33.5679 38.6188 32.9706 36.0988 32.9706 33.2242C32.9706 30.3122 33.5492 27.7548 34.7066 25.5522C35.9012 23.3495 37.5439 21.6322 39.6346 20.4002C41.7626 19.1682 44.2266 18.5522 47.0266 18.5522C49.7519 18.5522 52.1226 19.1682 54.1386 20.4002C56.1546 21.5948 57.7226 23.2002 58.8426 25.2162C59.9626 27.2322 60.5226 29.4535 60.5226 31.8802C60.5226 32.2535 60.5039 32.6642 60.4666 33.1122C60.4666 33.5228 60.4479 33.9895 60.4106 34.5122H38.7946C38.9812 37.2002 39.8586 39.2535 41.4266 40.6722C43.0319 42.0535 44.8799 42.7442 46.9706 42.7442C48.6506 42.7442 50.0506 42.3708 51.1706 41.6242C52.3279 40.8402 53.1866 39.7948 53.7466 38.4882H59.6826C58.9359 41.1015 57.4426 43.2855 55.2026 45.0402C52.9999 46.7948 50.2559 47.6722 46.9706 47.6722ZM46.9706 23.4242C44.9919 23.4242 43.2372 24.0215 41.7066 25.2162C40.1759 26.3735 39.2426 28.1282 38.9066 30.4802H54.5866C54.4746 28.3148 53.7093 26.5975 52.2906 25.3282C50.8719 24.0588 49.0986 23.4242 46.9706 23.4242Z" />
				<path d="M63.8817 47.0002V19.2242H69.2017L69.7057 24.4882C70.6764 22.6588 72.0204 21.2215 73.7377 20.1762C75.4924 19.0935 77.6017 18.5522 80.0657 18.5522V24.7682H78.4417C76.799 24.7682 75.3244 25.0482 74.0177 25.6082C72.7484 26.1308 71.7217 27.0455 70.9377 28.3522C70.191 29.6215 69.8177 31.3948 69.8177 33.6722V47.0002H63.8817Z" />
				<path d="M94.5815 47.6722C91.9309 47.6722 89.5415 47.0748 87.4135 45.8802C85.3229 44.6482 83.6615 42.9495 82.4295 40.7842C81.1975 38.5815 80.5815 36.0242 80.5815 33.1122C80.5815 30.2002 81.1975 27.6615 82.4295 25.4962C83.6989 23.2935 85.3975 21.5948 87.5255 20.4002C89.6535 19.1682 92.0242 18.5522 94.6375 18.5522C97.2882 18.5522 99.6589 19.1682 101.75 20.4002C103.878 21.5948 105.558 23.2935 106.79 25.4962C108.059 27.6615 108.694 30.2002 108.694 33.1122C108.694 36.0242 108.059 38.5815 106.79 40.7842C105.558 42.9495 103.878 44.6482 101.75 45.8802C99.6215 47.0748 97.2322 47.6722 94.5815 47.6722ZM94.5815 42.5762C96.0002 42.5762 97.3069 42.2215 98.5015 41.5122C99.7335 40.8028 100.723 39.7575 101.47 38.3762C102.216 36.9575 102.59 35.2028 102.59 33.1122C102.59 31.0215 102.216 29.2855 101.47 27.9042C100.76 26.4855 99.7895 25.4215 98.5575 24.7122C97.3629 24.0028 96.0562 23.6482 94.6375 23.6482C93.2189 23.6482 91.8935 24.0028 90.6615 24.7122C89.4669 25.4215 88.4962 26.4855 87.7495 27.9042C87.0029 29.2855 86.6295 31.0215 86.6295 33.1122C86.6295 35.2028 87.0029 36.9575 87.7495 38.3762C88.4962 39.7575 89.4669 40.8028 90.6615 41.5122C91.8562 42.2215 93.1629 42.5762 94.5815 42.5762Z" />
				<path d="M115.673 13.9602C114.553 13.9602 113.62 13.6242 112.873 12.9522C112.164 12.2428 111.809 11.3655 111.809 10.3202C111.809 9.27484 112.164 8.41618 112.873 7.74418C113.62 7.03484 114.553 6.68018 115.673 6.68018C116.793 6.68018 117.708 7.03484 118.417 7.74418C119.164 8.41618 119.537 9.27484 119.537 10.3202C119.537 11.3655 119.164 12.2428 118.417 12.9522C117.708 13.6242 116.793 13.9602 115.673 13.9602ZM112.705 47.0002V19.2242H118.641V47.0002H112.705Z" />
				<path d="M136.837 47.6722C134.112 47.6722 131.666 47.0562 129.501 45.8242C127.373 44.5922 125.693 42.8935 124.461 40.7282C123.266 38.5255 122.669 35.9868 122.669 33.1122C122.669 30.2375 123.266 27.7175 124.461 25.5522C125.693 23.3495 127.373 21.6322 129.501 20.4002C131.666 19.1682 134.112 18.5522 136.837 18.5522C140.272 18.5522 143.146 19.4482 145.461 21.2402C147.813 23.0322 149.325 25.4588 149.997 28.5202H143.781C143.408 26.9895 142.586 25.7948 141.317 24.9362C140.048 24.0775 138.554 23.6482 136.837 23.6482C135.381 23.6482 134.037 24.0215 132.805 24.7682C131.573 25.4775 130.584 26.5415 129.837 27.9602C129.09 29.3415 128.717 31.0588 128.717 33.1122C128.717 35.1655 129.09 36.9015 129.837 38.3202C130.584 39.7015 131.573 40.7655 132.805 41.5122C134.037 42.2588 135.381 42.6322 136.837 42.6322C138.554 42.6322 140.048 42.2028 141.317 41.3442C142.586 40.4855 143.408 39.2722 143.781 37.7042H149.997C149.362 40.6908 147.869 43.0988 145.517 44.9282C143.165 46.7575 140.272 47.6722 136.837 47.6722Z" />
				<path d="M166.627 47.6722C163.976 47.6722 161.587 47.0748 159.459 45.8802C157.368 44.6482 155.707 42.9495 154.475 40.7842C153.243 38.5815 152.627 36.0242 152.627 33.1122C152.627 30.2002 153.243 27.6615 154.475 25.4962C155.744 23.2935 157.443 21.5948 159.571 20.4002C161.699 19.1682 164.069 18.5522 166.683 18.5522C169.333 18.5522 171.704 19.1682 173.795 20.4002C175.923 21.5948 177.603 23.2935 178.835 25.4962C180.104 27.6615 180.739 30.2002 180.739 33.1122C180.739 36.0242 180.104 38.5815 178.835 40.7842C177.603 42.9495 175.923 44.6482 173.795 45.8802C171.667 47.0748 169.277 47.6722 166.627 47.6722ZM166.627 42.5762C168.045 42.5762 169.352 42.2215 170.547 41.5122C171.779 40.8028 172.768 39.7575 173.515 38.3762C174.261 36.9575 174.635 35.2028 174.635 33.1122C174.635 31.0215 174.261 29.2855 173.515 27.9042C172.805 26.4855 171.835 25.4215 170.603 24.7122C169.408 24.0028 168.101 23.6482 166.683 23.6482C165.264 23.6482 163.939 24.0028 162.707 24.7122C161.512 25.4215 160.541 26.4855 159.795 27.9042C159.048 29.2855 158.675 31.0215 158.675 33.1122C158.675 35.2028 159.048 36.9575 159.795 38.3762C160.541 39.7575 161.512 40.8028 162.707 41.5122C163.901 42.2215 165.208 42.5762 166.627 42.5762Z" />
				<path d="M184.358 47.0002V19.2242H189.622L190.07 24.0962C190.929 22.3788 192.18 21.0348 193.822 20.0642C195.502 19.0562 197.425 18.5522 199.59 18.5522C202.95 18.5522 205.582 19.5975 207.486 21.6882C209.428 23.7788 210.398 26.8962 210.398 31.0402V47.0002H204.518V31.6562C204.518 26.2802 202.316 23.5922 197.91 23.5922C195.708 23.5922 193.878 24.3762 192.422 25.9442C191.004 27.5122 190.294 29.7522 190.294 32.6642V47.0002H184.358Z" />
				<path d="M225.678 47.6722C222.168 47.6722 219.275 46.8135 216.998 45.0962C214.72 43.3788 213.414 41.1015 213.078 38.2642H219.07C219.368 39.5335 220.078 40.6348 221.198 41.5682C222.318 42.4642 223.792 42.9122 225.622 42.9122C227.414 42.9122 228.72 42.5388 229.542 41.7922C230.363 41.0455 230.774 40.1868 230.774 39.2162C230.774 37.7975 230.195 36.8455 229.038 36.3602C227.918 35.8375 226.35 35.3708 224.334 34.9602C222.766 34.6242 221.198 34.1762 219.63 33.6162C218.099 33.0562 216.811 32.2722 215.766 31.2642C214.758 30.2188 214.254 28.8188 214.254 27.0642C214.254 24.6375 215.187 22.6215 217.054 21.0162C218.92 19.3735 221.534 18.5522 224.894 18.5522C227.992 18.5522 230.494 19.2988 232.398 20.7922C234.339 22.2855 235.478 24.3948 235.814 27.1202H230.102C229.915 25.9255 229.355 24.9922 228.422 24.3202C227.526 23.6482 226.312 23.3122 224.782 23.3122C223.288 23.3122 222.131 23.6295 221.31 24.2642C220.488 24.8615 220.078 25.6455 220.078 26.6162C220.078 27.5868 220.638 28.3522 221.758 28.9122C222.915 29.4722 224.427 29.9762 226.294 30.4242C228.16 30.8348 229.878 31.3202 231.446 31.8802C233.051 32.4028 234.339 33.1868 235.31 34.2322C236.28 35.2775 236.766 36.8082 236.766 38.8242C236.803 41.3628 235.814 43.4722 233.798 45.1522C231.819 46.8322 229.112 47.6722 225.678 47.6722Z" />
			</svg>
		</Apply>
		<div className="absolute left-full inset-y-0">
			<div className="flex flex-row items-center h-full">
				<Apply className="w-12 h-12 opacity-25">
					<SVGFlag />
				</Apply>
			</div>
		</div>
	</div>
)

const Attribution = () => (
	// <div className="w-96 h-5 bg-gray-300 rounded-1" />
	<h2 className="font-medium text-lg text-gray-800" style={{ lineHeight: 1.375 }}>
		<span className="inline-flex flex-row flex-wrap justify-center items-center">
			<Apply className="w-5 h-5">
				<SVGBookOpen />
			</Apply>
			<span style={{ width: "0.33ch" }} />
			MIT icons by
			<span style={{ width: "0.33ch" }} />
			<span className="font-semibold no-underline hover:underline">
				@steveschoger
			</span>
			. Third-party viewer by
			<span style={{ width: "0.33ch" }} />
			<span className="font-semibold no-underline hover:underline">
				@username_ZAYDEK
			</span>
			.
		</span>
	</h2>
)

const CTAButtons = () => (
	<div className="flex flex-col sm:flex-row w-full sm:w-auto">

		<Reset className="block">
			{/* <a href="https://github.com/tailwindlabs/heroicons/archive/v0.4.1.zip" {...target_blank}> */}
			<a href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...target_blank}>
				<div className="px-5 py-4 bg-gray-200 rounded-3">
					<p className="whitespace-pre text-center sm:text-left font-medium text-lg leading-none text-gray-800">
						<span className="inline-flex flex-row items-center">
							<Apply className="mr-1 w-5 h-5">
								{/* <SVGDownload /> */}
								<svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
									<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
									<path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
									<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
									<path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
									<path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
								</svg>
							</Apply>
							<span style={{ width: "0.33ch" }} />
							Open in Figma
						</span>
					</p>
				</div>
			</a>
		</Reset>

		<div className="w-3 h-3" />
		<Reset className="block">
			<a href="https://github.com/tailwindlabs/heroicons" {...target_blank}>
				<div className="px-5 py-4 bg-gray-200 rounded-3">
					<p className="whitespace-pre text-center sm:text-left font-medium text-lg leading-none text-gray-800">
						<span className="inline-flex flex-row items-center">
							<Apply className="mr-1 w-5 h-5">
								<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
								</svg>
							</Apply>
							<span style={{ width: "0.33ch" }} />
							Open in GitHub
						</span>
					</p>
				</div>
			</a>
		</Reset>

	</div>
)

// flex flex-row flex-wrap justify-center items-center">
const Sponsors = () => (
	<div className="relative">

		{/* Center (sm) */}
		<Apply className="block sm:hidden">
			<div className="pb-4 absolute inset-x-0 bottom-full">
				<h6 className="text-center font-bold tracking-wider leading-none text-gray-800" style={{ fontSize: "0.6875rem" }}>
					<span className="inline-flex flex-row items-center">
						OUR SPONSORS &middot; UNAFFILIATED WITH TAILWIND LABS
						<span style={{ width: "0.33ch" }} />
						<Apply className="-mb-px w-3 h-3">
							<SVGBeaker />
						</Apply>
					</span>
				</h6>
			</div>
		</Apply>

		{/* LHS */}
		<Apply className="hidden sm:block">
			<div className="px-8 pb-4 absolute bottom-full left-0">
				<h6 className="font-bold tracking-wider leading-none text-gray-800" style={{ fontSize: "0.6875rem" }}>
					<span className="inline-flex flex-row items-center">
						OUR SPONSORS &middot; BECOME A SPONSOR
						<span style={{ width: "0.33ch" }} />
						<Apply className="-mb-px w-3 h-3">
							<SVGExternalLink />
						</Apply>
					</span>
				</h6>
			</div>
		</Apply>

		{/* RHS */}
		<Apply className="hidden sm:block">
			<div className="px-8 pb-4 absolute bottom-full right-0">
				<h6 className="font-bold tracking-wider leading-none text-gray-800" style={{ fontSize: "0.6875rem" }}>
					<span className="inline-flex flex-row items-center">
						UNAFFILIATED WITH TAILWIND LABS
						<span style={{ width: "0.33ch" }} />
						<Apply className="-mb-px w-3 h-3">
							<SVGBeaker />
						</Apply>
					</span>
				</h6>
			</div>
		</Apply>

		<div className="-mx-1.5 -my-1 flex flex-row flex-wrap justify-center items-center">
			{range(6).map(each => (
				<div className="mx-2 my-1.5">
					<div
						className="h-14 bg-gray-200 rounded-full"
						style={{ width: tw(36 + Math.floor(Math.random() * (48 - 36))) }}
					/>
					<div className="h-2" />
					<p className="text-center font-medium leading-none text-gray-800" style={{ fontSize: "0.6875rem" }}>
						<span className="inline-flex flex-row items-center">
							<span className="opacity-75">
								&ldquo;
							</span>
							10x Browser Tests
							<span className="opacity-75">
								&rdquo;
							</span>
							<span style={{ width: "0.33ch" }} />
							<Apply className="w-3 h-3 opacity-75">
								<SVGExternalLink />
							</Apply>
						</span>
					</p>
				</div>
			))}
		</div>

	</div>

	// <div className="relative">
	// 	<div className="pb-4 absolute bottom-full left-0">
	// 		<h6 className="font-bold tracking-wider leading-none text-gray-80" style={{ fontSize: "0.625rem" }}>
	// 			<span className="inline-flex flex-row items-center">
	// 				OUR SPONSORS &middot; BECOME A SPONSOR{" "}
	// 				{/* <span style={{ width: "0.25ch" }} /> */}
	// 				{/* <Apply className="w-3 h-3 transform scale-110" style={{ marginTop: -2 }}> */}
	// 				{/* 	<ExternalLinkSVG /> */}
	// 				{/* </Apply> */}
	// 			</span>
	// 		</h6>
	// 	</div>
	// 	<div className="pb-4 absolute bottom-full right-0">
	// 		<h6 className="font-bold tracking-wider leading-none text-gray-80" style={{ fontSize: "0.625rem" }}>
	// 			<span className="inline-flex flex-row items-center">
	// 				UNAFFILIATED WITH TAILWIND LABS{" "}
	// 				{/* <span style={{ width: "0.25ch" }} /> */}
	// 				{/* <Apply className="w-3 h-3 transform scale-110" style={{ marginTop: -2 }}> */}
	// 				{/* 	<BeakerSVG /> */}
	// 				{/* </Apply> */}
	// 			</span>
	// 		</h6>
	// 	</div>
	// 	<div className="-mx-3 -my-2 flex flex-row flex-wrap">
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“10x Browser Tests”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“Landing Page Ebook”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“Resumé Optimizer”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“Laravel Softwarehouse”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“Download 30,000 Icons”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 		<Apply className="relative">
	// 			<div
	// 				className="mx-3 my-2 px-4 py-3 h-14 bg-gray-100 rounded-full"
	// 				style={{ width: tw(24 + Math.floor(Math.random() * (48 - 24))) }}
	// 			>
	// 				<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
	// 					<p className="whitespace-pre font-medium text-xs leading-none text-gray-800">
	// 						<span className="inline-flex flex-row items-center">
	// 							“Spell Checker for Figma”{" "}
	// 							{/* <Apply className="w-3 h-3 opacity-75"> */}
	// 							{/* 	<ExternalLinkSVG /> */}
	// 							{/* </Apply> */}
	// 						</span>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</Apply>
	// 	</div>
	// </div>
)

const Hero = () => (
	<div className="relative">

		{/* NOTE: Uses px-* here because of backgrounds. */}
		<div className="px-4 flex flex-row justify-center bg-gray-300">
			<div className="w-full" style={{ maxWidth: px(1152) }}>
				<div className="h-16" />

				<div className="flex flex-row justify-center">
					<HeroiconsLogo />
				</div>

				<div className="h-4" />
				<div className="flex flex-row justify-center">
					<Attribution />
				</div>

				<div className="hidden sm:block">
					<div className="h-8" />
					<div className="flex flex-row justify-center">
						<CTAButtons />
					</div>
				</div>

				<div className="h-16" />
				<div className="flex flex-row justify-center">
					<Sponsors />
				</div>

				<div className="h-16" />
				<div style={{ height: tw(18 + 6) }} />
			</div>
		</div>

		<Apply className="-z-10">
			<div className="absolute inset-x-0 top-full">
				<Apply className="text-gray-300">
					<svg fill="currentColor" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
					</svg>
				</Apply>
			</div>
		</Apply>

		<Apply className="-z-10">
			<div className="fixed inset-x-0 top-0">
				<div className="h-24 bg-gray-300" />
				<Apply className="text-gray-300">
					<svg fill="currentColor" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
					</svg>
				</Apply>
			</div>
		</Apply>

	</div>
)

const Search = () => (
	// NOTE: Uses h-full because of absolute inset-0.
	<Apply className="h-full">
		<div className="relative">

			{/* LHS */}
			<div className="absolute left-0 inset-y-0">
				<div className="px-8 pr-4 flex flex-row items-center h-full">
					<Apply className="w-6 h-6 text-gray-400">
						<SVGSearchOutline />
					</Apply>
				</div>
			</div>

			{/* Search */}
			<Reset className="block w-full h-full focus:outline-none">
				<input
					className="px-16 text-xl text-gray-800 bg-white rounded-6 shadow-inset-outset"
					style={{ paddingLeft: tw(8 + 6 + 4) }}
					{...disableAutoCorrect}
				/>
			</Reset>

			{/* RHS */}
			<div className="absolute right-0 inset-y-0">
				{/* ... */}
			</div>

		</div>
	</Apply>
)

// TODO: Memoize.
const MemoIcon = () => (
	// NOTE: Uses h-full because of absolute inset-0.
	<Apply className="h-full">
		<div className="relative shadow-inset-outset">

			{/* New */}
			<div className="p-4 absolute right-0 top-0">
				{Math.floor(Math.random() * 5) === 0 && (
					<div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" />
				)}
			</div>

			{/* Icon */}
			<div className="flex flex-row justify-center items-center h-full">
				<div className="w-8 h-8 bg-gray-500 rounded-full" />
			</div>

			{/* Text */}
			<div className="pb-4 absolute inset-x-0 bottom-0">
				<div className="flex flex-row justify-center">
					<div className="w-24 h-3 bg-gray-300 rounded-1" />
				</div>
			</div>

		</div>
	</Apply>
)

function range(max) {
	return Array(max).fill().map((_, x) => x)
}

const App = () => (
	<Apply style={{ marginTop: tw(-(18 + 6)) }}>
		{/* NOTE: Uses items-start because of sticky top-*. */}
		<div className="flex flex-row justify-center items-start">
			<div className="w-full" style={{ maxWidth: px(1152) }}>

				{/* Search */}
				<div className="-mt-4 pt-4 sticky top-0 z-10">
					<div className="-mx-4 absolute inset-0 top-0">
						<div className="h-4 bg-gray-300" />
						<div className="h-9 bg-gray-300" />
						{/* NOTE: bg-gradient-to-b ... to-transparent
						does not work because of Safari. */}
						<div className="h-9" style={{ backgroundImage: "linear-gradient(var(--gray-300), #ffffff00)" }} />
					</div>
					<div className="rounded-6 shadow-2">
						<div className="rounded-6" style={{ height: tw(18) }}>
							<Search />
						</div>
					</div>
				</div>

				{/* Icons */}
				<div style={{ height: tw(6) }} />
				<div className="rounded-6 shadow-2">
					{/* TODO: Drop overflow-hidden here? */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-white rounded-6 shadow-inset-outset overflow-hidden">

						{range(200).map((each, x) => (
							// TODO: each.name
							<div key={each.name} className="pb-full relative">
								<div className="absolute inset-0">
									{/* <MemoIcon */}
									{/* 	state={state} */}
									{/* 	dispatch={dispatch} */}
									{/* 	icon={each} */}
									{/* /> */}
									<MemoIcon />
								</div>
							</div>
						))}

					</div>
				</div>

			</div>
		</div>
	</Apply>
)

// hsl(272.5, 100%, 47.5%)

const Layout = () => {
	React.useEffect(() => {
		if (navigator.userAgent.includes("Chrome")) {
			document.body.classList.add("chrome")
		}
	}, [])

	return (
		<div>

			<style>{`
.shadow-inset-outset {
	box-shadow: inset 0 0 0 1px var(--gray-200), 0 0 0 1px var(--gray-200);
}
.chrome .shadow-inset-outset {
	box-shadow: inset 0 0 0 0.5px var(--gray-200), 0 0 0 0.5px var(--gray-200);
}
`}
			</style>

			<header>
				<Hero />
			</header>

			<main className="px-4">
				<App />
			</main>

			{/* TODO: Remove. */}
			<div className="h-24" />

		</div>
	)
}

export default Layout
