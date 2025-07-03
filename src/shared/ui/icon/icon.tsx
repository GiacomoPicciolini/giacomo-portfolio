import React from 'react'

export type IconType = 'BURGER_MENU' | 'CROSS' | 'LINKEDIN_CUBE' | 'LINKEDIN_CIRCLE'

const ICONS: { [key in IconType]: React.FC<any> } = {
  BURGER_MENU: (props: any) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <mask
        id="mask0_275_1135"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <rect width="36" height="36" />
      </mask>
      <g mask="url(#mask0_275_1135)">
        <path d="M1 24.375V21H34.75V24.375H1ZM1 15.375V12H34.75V15.375H1Z" fill="currentColor" />
      </g>
    </svg>
  ),
  CROSS: (props: any) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <mask
        id="mask0_275_1155"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <rect width="36" height="36" />
      </mask>
      <g mask="url(#mask0_275_1155)">
        <path
          d="M9.59991 27.9805L8.01929 26.3999L16.4193 17.9999L8.01929 9.59991L9.59991 8.01929L17.9999 16.4193L26.3999 8.01929L27.9805 9.59991L19.5805 17.9999L27.9805 26.3999L26.3999 27.9805L17.9999 19.5805L9.59991 27.9805Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  LINKEDIN_CUBE: (props: any) => (
    <svg
      width={props.width}
      height={props.width}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M39.315 6.00005H8.685C7.98709 5.99585 7.31527 6.2651 6.81342 6.75012C6.31158 7.23515 6.01959 7.8974 6 8.59505V39.3C6.01575 39.999 6.30653 40.6635 6.80923 41.1493C7.31192 41.6352 7.98595 41.9031 8.685 41.8951H39.315C40.0141 41.9031 40.6881 41.6352 41.1908 41.1493C41.6935 40.6635 41.9842 39.999 42 39.3V8.59505C41.9804 7.8974 41.6884 7.23515 41.1866 6.75012C40.6847 6.2651 40.0129 5.99585 39.315 6.00005ZM16.665 36.615H11.385V19.5H16.665V36.615ZM14.085 17.115C13.2743 17.1153 12.4957 16.7985 11.9155 16.2323C11.3353 15.6661 10.9996 14.8955 10.98 14.085C10.9653 13.6733 11.0356 13.263 11.1864 12.8797C11.3373 12.4963 11.5655 12.1481 11.8568 11.8568C12.1481 11.5655 12.4963 11.3373 12.8796 11.1865C13.263 11.0356 13.6733 10.9654 14.085 10.98C14.8693 11.0347 15.6036 11.3847 16.1399 11.9596C16.6761 12.5345 16.9743 13.2914 16.9743 14.0775C16.9743 14.8637 16.6761 15.6206 16.1399 16.1955C15.6036 16.7704 14.8693 17.1204 14.085 17.175V17.115ZM36.72 36.51H31.5V28.14C31.5 26.145 31.5 23.55 28.71 23.55C25.92 23.55 25.5 25.74 25.5 27.945V36.42H20.16V19.5H25.14V21.75H25.245C25.7554 20.8636 26.4997 20.1345 27.3965 19.6424C28.2933 19.1504 29.3081 18.9143 30.33 18.96C35.715 18.96 36.72 22.56 36.72 27.135V36.51Z" />
    </svg>
  ),
  LINKEDIN_CIRCLE: (props: any) => (
    <svg
      height={props.height}
      width={props.width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112.196 112.196"
      className={props.className}
    >
      <g>
        <circle cx="56.098" cy="56.097" r="56.098" />
        <g>
          <path
            fill={props.fill}
            d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
          />
        </g>
      </g>
    </svg>
  ),
}
type TIcon = {
  type: IconType
  fill?: string
  width?: number | string
  height?: number | string
  stroke?: string
  className?: string
}

const Icon: React.FC<TIcon> = ({ type, ...props }) => {
  const IconComponent = ICONS[type]

  return <IconComponent {...props} />
}

export { Icon }
