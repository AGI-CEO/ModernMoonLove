interface LogoIconProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

export default function LogoIcon({
  className,
  width = '100%',
  height = '100%',
  fill = '#000'
}: LogoIconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 110 116"
      >
        <path
          className="opacity:1"
          fill="#a89c8a"
          d="M -0.5,-0.5 C 36.5,-0.5 73.5,-0.5 110.5,-0.5C 110.5,38.5 110.5,77.5 110.5,116.5C 73.5,116.5 36.5,116.5 -0.5,116.5C -0.5,77.5 -0.5,38.5 -0.5,-0.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e8e2db"
          d="M 54.5,2.5 C 56.8919,4.23286 57.7252,6.56619 57,9.5C 55.6667,8.16667 54.3333,8.16667 53,9.5C 52.5983,8.1279 52.0983,6.79457 51.5,5.5C 52.9935,4.85892 53.9935,3.85892 54.5,2.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dad4cb"
          d="M 39.5,9.5 C 41.337,9.63945 41.6704,10.3061 40.5,11.5C 39.7025,11.0431 39.3691,10.3764 39.5,9.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d3ccc2"
          d="M 73.5,9.5 C 76.7973,9.3287 77.1306,9.99536 74.5,11.5C 73.7025,11.0431 73.3691,10.3764 73.5,9.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e3ded6"
          d="M 28.5,13.5 C 29.9187,12.5489 31.5853,12.2155 33.5,12.5C 33.762,13.9778 33.4287,15.3112 32.5,16.5C 31.5745,15.3595 30.7412,15.3595 30,16.5C 29.7679,15.2625 29.2679,14.2625 28.5,13.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e5dfd8"
          d="M 84.5,14.5 C 86.5323,15.0478 87.5323,16.3812 87.5,18.5C 85.2841,18.7254 83.6174,17.8921 82.5,16C 83.4158,15.7216 84.0825,15.2216 84.5,14.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd8d0"
          d="M 50.5,14.5 C 56.8421,14.3338 63.1754,14.5005 69.5,15C 63.9674,16.3439 58.634,18.1773 53.5,20.5C 53.9817,19.5837 54.315,18.5837 54.5,17.5C 53.0817,16.569 51.7483,15.569 50.5,14.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e5e0d7"
          d="M 17.5,19.5 C 20.6898,20.6671 21.0232,22.3338 18.5,24.5C 16.3737,23.0908 16.0404,21.4241 17.5,19.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd8d0"
          d="M 45.5,16.5 C 46.5498,16.9046 46.5498,17.5712 45.5,18.5C 43.988,19.8625 42.488,20.1958 41,19.5C 40.7508,20.624 40.2508,21.624 39.5,22.5C 37.9631,21.8019 36.6298,21.4685 35.5,21.5C 38.2353,18.7989 41.5686,17.1322 45.5,16.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dbd3cb"
          d="M 53.5,20.5 C 49.8333,23.5 46.5,26.8333 43.5,30.5C 43.8693,28.5588 44.536,26.7255 45.5,25C 44.3774,23.9563 43.0441,23.2896 41.5,23C 43.5,22.6667 45.5,22.3333 47.5,22C 46.3961,20.8687 46.7295,20.0354 48.5,19.5C 50.0709,20.3094 51.7376,20.6427 53.5,20.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d5cdc3"
          d="M 43.5,30.5 C 43.3404,32.153 42.6737,33.4863 41.5,34.5C 40.8716,31.0451 38.8716,29.8785 35.5,31C 34.1667,31.6667 34.1667,32.3333 35.5,33C 31.8985,33.6346 31.2318,34.968 33.5,37C 30.9977,38.4316 28.4977,38.5982 26,37.5C 25.51,36.2068 25.3433,34.8734 25.5,33.5C 24.5,33.5 23.5,33.5 22.5,33.5C 23.8637,31.8089 25.197,30.1423 26.5,28.5C 26.8923,30.1789 27.3923,31.8455 28,33.5C 29.9124,32.3081 31.9124,31.3081 34,30.5C 34.6667,29.8333 34.6667,29.1667 34,28.5C 33.0347,30.2603 31.868,30.5937 30.5,29.5C 31.8333,28.5 33.1667,27.5 34.5,26.5C 33.0011,25.0962 33.3344,24.4296 35.5,24.5C 37.8193,25.0639 40.1526,25.5639 42.5,26C 38.0733,26.0002 37.5733,27.1668 41,29.5C 41.3333,28.8333 41.6667,28.1667 42,27.5C 42.2321,28.7375 42.7321,29.7375 43.5,30.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e1dbd3"
          d="M 69.5,24.5 C 72.5301,29.3168 71.8634,30.1501 67.5,27C 68.3805,26.2917 69.0472,25.4584 69.5,24.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e9e3dc"
          d="M 96.5,24.5 C 99.4595,27.2714 99.1261,28.2714 95.5,27.5C 96.1272,26.5832 96.4606,25.5832 96.5,24.5 Z"
        />

        <path
          className="opacity:1"
          fill="#c3baad"
          d="M 50.5,14.5 C 51.7483,15.569 53.0817,16.569 54.5,17.5C 54.315,18.5837 53.9817,19.5837 53.5,20.5C 51.7376,20.6427 50.0709,20.3094 48.5,19.5C 46.7295,20.0354 46.3961,20.8687 47.5,22C 45.5,22.3333 43.5,22.6667 41.5,23C 43.0441,23.2896 44.3774,23.9563 45.5,25C 44.536,26.7255 43.8693,28.5588 43.5,30.5C 42.7321,29.7375 42.2321,28.7375 42,27.5C 41.6667,28.1667 41.3333,28.8333 41,29.5C 37.5733,27.1668 38.0733,26.0002 42.5,26C 40.1526,25.5639 37.8193,25.0639 35.5,24.5C 33.3344,24.4296 33.0011,25.0962 34.5,26.5C 33.1667,27.5 31.8333,28.5 30.5,29.5C 31.868,30.5937 33.0347,30.2603 34,28.5C 34.6667,29.1667 34.6667,29.8333 34,30.5C 31.9124,31.3081 29.9124,32.3081 28,33.5C 27.3923,31.8455 26.8923,30.1789 26.5,28.5C 28.6367,25.027 31.6367,22.6936 35.5,21.5C 36.6298,21.4685 37.9631,21.8019 39.5,22.5C 40.2508,21.624 40.7508,20.624 41,19.5C 42.488,20.1958 43.988,19.8625 45.5,18.5C 46.5498,17.5712 46.5498,16.9046 45.5,16.5C 46.9303,15.4625 48.597,14.7959 50.5,14.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd8d0"
          d="M 49.5,30.5 C 51.1042,31.287 51.7709,32.6203 51.5,34.5C 47.8696,33.9381 47.203,32.6048 49.5,30.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dbd3ca"
          d="M 41.5,34.5 C 40.1224,38.0505 39.1224,41.7171 38.5,45.5C 37.6925,43.3901 36.0258,41.3901 33.5,39.5C 34.727,38.4096 35.5604,37.0762 36,35.5C 36.4186,36.6721 37.0853,37.6721 38,38.5C 37.1388,35.9174 38.3055,34.584 41.5,34.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d0c8bd"
          d="M 57.5,38.5 C 58.5676,37.5655 59.901,37.2322 61.5,37.5C 61.5,38.5 61.5,39.5 61.5,40.5C 59.8007,40.4729 58.4674,39.8062 57.5,38.5 Z"
        />

        <path
          className="opacity:1"
          fill="#efe9e4"
          d="M 86.5,38.5 C 87.9313,39.7804 88.5979,41.4471 88.5,43.5C 90.5273,43.3379 92.5273,43.5045 94.5,44C 92.2615,45.9777 90.9282,48.4777 90.5,51.5C 89.2519,50.9598 88.0852,50.2931 87,49.5C 83.0384,53.8751 81.8717,53.3751 83.5,48C 82.2011,46.6736 80.8678,45.3402 79.5,44C 81.4727,43.5045 83.4727,43.3379 85.5,43.5C 85.6287,41.7839 85.962,40.1172 86.5,38.5 Z"
        />

        <path
          className="opacity:1"
          fill="#ddd6cd"
          d="M 21.5,34.5 C 22.2724,36.5295 21.6057,38.3629 19.5,40C 22.1667,40.3333 24.8333,40.6667 27.5,41C 25.6031,42.1097 23.7698,42.2764 22,41.5C 21.0053,42.0659 20.172,42.7326 19.5,43.5C 18.5084,43.6716 17.8417,43.3382 17.5,42.5C 18.3084,39.5498 19.6418,36.8831 21.5,34.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dbd4ca"
          d="M 31.5,46.5 C 29.0661,46.3522 26.3995,46.1856 23.5,46C 21.6803,45.7996 20.347,44.9663 19.5,43.5C 21.905,43.8664 24.2383,44.5331 26.5,45.5C 27.1667,45.1667 27.8333,44.8333 28.5,44.5C 27.624,43.7492 26.624,43.2492 25.5,43C 28.2649,42.8755 29.9316,42.0421 30.5,40.5C 32.556,41.0476 34.2226,42.2142 35.5,44C 33.1224,44.9745 33.4557,45.6411 36.5,46C 35.5838,46.3742 34.7504,46.8742 34,47.5C 33.3292,46.7476 32.4959,46.4142 31.5,46.5 Z"
        />

        <path
          className="opacity:1"
          fill="#cec6bb"
          d="M 63.5,44.5 C 64.7759,45.3864 64.7759,46.3864 63.5,47.5C 62.4376,46.5754 62.4376,45.5754 63.5,44.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e0d9d1"
          d="M 16.5,44.5 C 17.3094,45.4687 18.3094,46.3021 19.5,47C 18.5842,47.2784 17.9175,47.7784 17.5,48.5C 16.8333,48.5 16.1667,48.5 15.5,48.5C 15.4326,47.0413 15.7659,45.7079 16.5,44.5 Z"
        />

        <path
          className="opacity:1"
          fill="#ccc3b7"
          d="M 17.5,42.5 C 17.8417,43.3382 18.5084,43.6716 19.5,43.5C 20.347,44.9663 21.6803,45.7996 23.5,46C 26.3995,46.1856 29.0661,46.3522 31.5,46.5C 30.5266,46.9867 29.5266,47.4867 28.5,48C 31.0254,48.4238 33.0254,49.5905 34.5,51.5C 29.8429,51.1167 25.5095,49.7833 21.5,47.5C 20.2638,48.2458 18.9305,48.5792 17.5,48.5C 17.9175,47.7784 18.5842,47.2784 19.5,47C 18.3094,46.3021 17.3094,45.4687 16.5,44.5C 16.3284,43.5084 16.6618,42.8417 17.5,42.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e8e3dd"
          d="M 49.5,46.5 C 51.4646,46.9483 51.7979,47.9483 50.5,49.5C 48.4807,48.8671 48.1474,47.8671 49.5,46.5 Z"
        />

        <path
          className="opacity:1"
          fill="#c4baad"
          d="M 41.5,34.5 C 38.3055,34.584 37.1388,35.9174 38,38.5C 37.0853,37.6721 36.4186,36.6721 36,35.5C 35.5604,37.0762 34.727,38.4096 33.5,39.5C 36.0258,41.3901 37.6925,43.3901 38.5,45.5C 38.7373,46.791 38.404,47.791 37.5,48.5C 36.7089,52.354 35.2089,56.0207 33,59.5C 31.3775,60.0989 29.8775,60.7656 28.5,61.5C 27.5768,62.3029 26.5768,62.4696 25.5,62C 25.8333,61.6667 26.1667,61.3333 26.5,61C 24.1192,60.7767 22.4525,59.61 21.5,57.5C 18.3753,56.8998 18.042,55.7331 20.5,54C 22.7078,53.8091 24.7078,53.3091 26.5,52.5C 29.0608,51.169 31.5608,51.5023 34,53.5C 34.4643,52.9056 34.631,52.2389 34.5,51.5C 33.0254,49.5905 31.0254,48.4238 28.5,48C 29.5266,47.4867 30.5266,46.9867 31.5,46.5C 32.4959,46.4142 33.3292,46.7476 34,47.5C 34.7504,46.8742 35.5838,46.3742 36.5,46C 33.4557,45.6411 33.1224,44.9745 35.5,44C 34.2226,42.2142 32.556,41.0476 30.5,40.5C 29.9316,42.0421 28.2649,42.8755 25.5,43C 26.624,43.2492 27.624,43.7492 28.5,44.5C 27.8333,44.8333 27.1667,45.1667 26.5,45.5C 24.2383,44.5331 21.905,43.8664 19.5,43.5C 20.172,42.7326 21.0053,42.0659 22,41.5C 23.7698,42.2764 25.6031,42.1097 27.5,41C 24.8333,40.6667 22.1667,40.3333 19.5,40C 21.6057,38.3629 22.2724,36.5295 21.5,34.5C 21.5,33.8333 21.8333,33.5 22.5,33.5C 23.5,33.5 24.5,33.5 25.5,33.5C 25.3433,34.8734 25.51,36.2068 26,37.5C 28.4977,38.5982 30.9977,38.4316 33.5,37C 31.2318,34.968 31.8985,33.6346 35.5,33C 34.1667,32.3333 34.1667,31.6667 35.5,31C 38.8716,29.8785 40.8716,31.0451 41.5,34.5 Z"
        />

        <path
          className="opacity:1"
          fill="#b6ab9c"
          d="M 34.5,51.5 C 34.631,52.2389 34.4643,52.9056 34,53.5C 31.5608,51.5023 29.0608,51.169 26.5,52.5C 23.4017,52.5875 23.0684,52.0875 25.5,51C 23.5355,50.376 21.8689,50.876 20.5,52.5C 19.2055,49.5131 17.2055,48.8464 14.5,50.5C 14.3284,49.5084 14.6618,48.8417 15.5,48.5C 16.1667,48.5 16.8333,48.5 17.5,48.5C 18.9305,48.5792 20.2638,48.2458 21.5,47.5C 25.5095,49.7833 29.8429,51.1167 34.5,51.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd9d0"
          d="M 69.5,49.5 C 71.6246,50.3676 71.7913,51.3676 70,52.5C 68.3167,51.8235 68.1501,50.8235 69.5,49.5 Z"
        />

        <path
          className="opacity:1"
          fill="#f2ede9"
          d="M 65.5,78.5 C 66.8723,82.4921 67.8723,86.6587 68.5,91C 68.3038,92.8784 67.9705,94.7117 67.5,96.5C 66.1529,97.1712 64.9862,97.1712 64,96.5C 61.9748,100.023 59.4748,100.689 56.5,98.5C 54.1047,98.7716 51.7714,98.7716 49.5,98.5C 48.9781,97.3926 48.6448,96.2259 48.5,95C 49.9863,92.4105 50.6529,89.5772 50.5,86.5C 50.8333,85.8333 51.1667,85.1667 51.5,84.5C 52.3414,82.6208 52.6747,80.6208 52.5,78.5C 53.1174,78.3893 53.6174,78.056 54,77.5C 54.8365,75.1788 55.1699,72.8454 55,70.5C 53.946,73.314 52.446,75.6473 50.5,77.5C 51.8306,72.6324 53.8306,68.1324 56.5,64C 51.9497,58.9446 52.9497,55.1112 59.5,52.5C 66.4963,55.6138 67.163,59.4472 61.5,64C 62.4162,64.3742 63.2496,64.8742 64,65.5C 65.1218,69.4927 66.6218,73.3261 68.5,77C 67.7562,78.0386 66.7562,78.5386 65.5,78.5 Z"
        />

        <path
          className="opacity:1"
          fill="#e3dcd4"
          d="M 23.5,55.5 C 23.9169,54.8761 24.5836,54.5427 25.5,54.5C 32.4477,55.4076 32.7811,56.241 26.5,57C 29.9374,57.6493 30.104,58.1493 27,58.5C 25.4022,57.5923 24.2355,56.5923 23.5,55.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dcd4ca"
          d="M 26.5,52.5 C 24.7078,53.3091 22.7078,53.8091 20.5,54C 18.042,55.7331 18.3753,56.8998 21.5,57.5C 19.076,57.1924 16.7427,57.5258 14.5,58.5C 14.6236,59.1067 14.9569,59.44 15.5,59.5C 15.1667,60.5 14.5,61.1667 13.5,61.5C 13.3227,57.7657 13.6561,54.0991 14.5,50.5C 17.2055,48.8464 19.2055,49.5131 20.5,52.5C 21.8689,50.876 23.5355,50.376 25.5,51C 23.0684,52.0875 23.4017,52.5875 26.5,52.5 Z"
        />

        <path
          className="opacity:1"
          fill="#b4a999"
          d="M 16.5,52.5 C 18.0281,52.5173 18.5281,53.184 18,54.5C 14.1887,55.9662 13.6887,55.2996 16.5,52.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d3ccc1"
          d="M 97.5,58.5 C 99.337,58.6395 99.6704,59.3061 98.5,60.5C 97.7025,60.0431 97.3691,59.3764 97.5,58.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd8d0"
          d="M 43.5,58.5 C 45.1042,59.287 45.7709,60.6203 45.5,62.5C 44.5,62.5 43.5,62.5 42.5,62.5C 42.4326,61.0413 42.7659,59.7079 43.5,58.5 Z"
        />

        <path
          className="opacity:1"
          fill="#bbb0a2"
          d="M 21.5,57.5 C 22.4525,59.61 24.1192,60.7767 26.5,61C 26.1667,61.3333 25.8333,61.6667 25.5,62C 26.5768,62.4696 27.5768,62.3029 28.5,61.5C 30.4286,61.2308 32.0953,61.7308 33.5,63C 32.9747,63.6924 32.3081,64.1924 31.5,64.5C 24.8525,62.7497 23.8525,63.4164 28.5,66.5C 26.7582,67.9573 24.7582,69.124 22.5,70C 23.448,70.4828 24.448,70.6495 25.5,70.5C 23.6155,71.9712 21.6155,72.4712 19.5,72C 20.6341,73.016 20.3008,73.6827 18.5,74C 19.1667,74.3333 19.8333,74.6667 20.5,75C 18.7756,75.4482 18.109,76.2815 18.5,77.5C 17.4824,75.4061 16.4824,73.4061 15.5,71.5C 15.6107,70.8826 15.944,70.3826 16.5,70C 18.4242,69.8208 20.0909,69.6541 21.5,69.5C 21.1924,68.6919 20.6924,68.0253 20,67.5C 18.9505,68.5171 17.7839,68.6838 16.5,68C 18.6324,67.082 19.299,65.7487 18.5,64C 17.0494,64.2626 15.7161,64.0959 14.5,63.5C 17.0673,62.1465 19.4006,62.4798 21.5,64.5C 21.109,63.2815 21.7756,62.4482 23.5,62C 21.4081,58.6945 18.7414,57.8612 15.5,59.5C 14.9569,59.44 14.6236,59.1067 14.5,58.5C 16.7427,57.5258 19.076,57.1924 21.5,57.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dfd9d1"
          d="M 75.5,60.5 C 77.1042,61.287 77.7709,62.6203 77.5,64.5C 73.8696,63.9381 73.203,62.6048 75.5,60.5 Z"
        />

        <path
          className="opacity:1"
          fill="#cdc4b8"
          d="M 15.5,71.5 C 13.8255,68.4928 13.1588,65.1595 13.5,61.5C 14.5,61.1667 15.1667,60.5 15.5,59.5C 18.7414,57.8612 21.4081,58.6945 23.5,62C 21.7756,62.4482 21.109,63.2815 21.5,64.5C 19.4006,62.4798 17.0673,62.1465 14.5,63.5C 15.7161,64.0959 17.0494,64.2626 18.5,64C 19.299,65.7487 18.6324,67.082 16.5,68C 17.7839,68.6838 18.9505,68.5171 20,67.5C 20.6924,68.0253 21.1924,68.6919 21.5,69.5C 20.0909,69.6541 18.4242,69.8208 16.5,70C 15.944,70.3826 15.6107,70.8826 15.5,71.5 Z"
        />

        <path
          className="opacity:1"
          fill="#bab0a1"
          d="M 28.5,66.5 C 31.1066,65.1976 33.7732,65.3643 36.5,67C 34.1224,67.9745 34.4557,68.6411 37.5,69C 33.534,69.8279 29.534,70.3279 25.5,70.5C 27.6723,69.1983 30.0056,68.0317 32.5,67C 31.2068,66.51 29.8734,66.3433 28.5,66.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d3cbc1"
          d="M 28.5,66.5 C 29.8734,66.3433 31.2068,66.51 32.5,67C 30.0056,68.0317 27.6723,69.1983 25.5,70.5C 24.448,70.6495 23.448,70.4828 22.5,70C 24.7582,69.124 26.7582,67.9573 28.5,66.5 Z"
        />

        <path
          className="opacity:1"
          fill="#b0a595"
          d="M 65.5,78.5 C 63.9119,76.4727 63.4119,74.1394 64,71.5C 64.977,73.74 65.477,76.0733 65.5,78.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d6cec4"
          d="M 37.5,48.5 C 37.4356,58.628 39.4356,68.2946 43.5,77.5C 43.1667,79.5 42.8333,81.5 42.5,83.5C 40.6214,83.6068 40.2881,83.1068 41.5,82C 40.8095,80.9326 40.3095,79.7659 40,78.5C 37.9419,79.1095 37.1086,80.1095 37.5,81.5C 36.549,80.6744 35.549,80.5078 34.5,81C 36.0589,81.9799 37.7256,82.8133 39.5,83.5C 37.9272,85.8362 36.5939,85.8362 35.5,83.5C 34.914,83.7093 34.414,84.0426 34,84.5C 32.3523,83.283 30.519,82.4497 28.5,82C 29.7932,81.51 31.1266,81.3433 32.5,81.5C 32.5,80.5 32.5,79.5 32.5,78.5C 33.3479,76.9069 34.6813,75.7403 36.5,75C 35.1667,74.6667 33.8333,74.3333 32.5,74C 33.6956,73.3457 33.6956,72.8457 32.5,72.5C 30.1697,73.6834 28.003,75.0168 26,76.5C 24.4634,77.1136 23.13,77.1136 22,76.5C 21.6807,79.1918 22.8474,80.8585 25.5,81.5C 26.7515,83.0009 27.7515,84.6675 28.5,86.5C 27.2397,86.7986 26.073,86.7986 25,86.5C 24.6155,88.1966 24.7822,89.8632 25.5,91.5C 19.7085,86.1637 16.3752,79.497 15.5,71.5C 16.4824,73.4061 17.4824,75.4061 18.5,77.5C 18.109,76.2815 18.7756,75.4482 20.5,75C 19.8333,74.6667 19.1667,74.3333 18.5,74C 20.3008,73.6827 20.6341,73.016 19.5,72C 21.6155,72.4712 23.6155,71.9712 25.5,70.5C 29.534,70.3279 33.534,69.8279 37.5,69C 34.4557,68.6411 34.1224,67.9745 36.5,67C 33.7732,65.3643 31.1066,65.1976 28.5,66.5C 23.8525,63.4164 24.8525,62.7497 31.5,64.5C 32.3081,64.1924 32.9747,63.6924 33.5,63C 32.0953,61.7308 30.4286,61.2308 28.5,61.5C 29.8775,60.7656 31.3775,60.0989 33,59.5C 35.2089,56.0207 36.7089,52.354 37.5,48.5 Z"
        />

        <path
          className="opacity:1"
          fill="#c4baae"
          d="M 32.5,78.5 C 31.2099,80.14 29.5433,80.64 27.5,80C 31.1862,78.8007 30.8529,78.4674 26.5,79C 23.8333,79.6667 23.8333,80.3333 26.5,81C 26.2716,81.3988 25.9382,81.5654 25.5,81.5C 22.8474,80.8585 21.6807,79.1918 22,76.5C 23.13,77.1136 24.4634,77.1136 26,76.5C 28.003,75.0168 30.1697,73.6834 32.5,72.5C 33.6956,72.8457 33.6956,73.3457 32.5,74C 33.8333,74.3333 35.1667,74.6667 36.5,75C 34.6813,75.7403 33.3479,76.9069 32.5,78.5 Z"
        />

        <path
          className="opacity:1"
          fill="#bab0a1"
          d="M 52.5,78.5 C 51.0755,80.0311 50.4088,79.6977 50.5,77.5C 52.446,75.6473 53.946,73.314 55,70.5C 55.1699,72.8454 54.8365,75.1788 54,77.5C 53.6174,78.056 53.1174,78.3893 52.5,78.5 Z"
        />

        <path
          className="opacity:1"
          fill="#cec5ba"
          d="M 43.5,77.5 C 45.5842,80.5897 48.2508,82.923 51.5,84.5C 51.1667,85.1667 50.8333,85.8333 50.5,86.5C 46.9302,86.9005 44.7636,88.9005 44,92.5C 44.0354,88.7548 43.0354,88.0881 41,90.5C 40.714,92.9986 40.8807,95.1652 41.5,97C 39.4311,97.3242 39.0977,98.1575 40.5,99.5C 39.7573,100.182 39.0906,100.849 38.5,101.5C 33.2565,99.3751 28.9232,96.0418 25.5,91.5C 26.3149,90.5707 27.1482,89.5707 28,88.5C 29.152,90.6487 30.652,92.482 32.5,94C 31.5494,94.7175 31.3828,95.5509 32,96.5C 32.6667,95.1667 33.3333,95.1667 34,96.5C 36.816,92.3005 35.6493,90.1339 30.5,90C 31.7932,89.51 33.1266,89.3433 34.5,89.5C 35.1667,89.8333 35.8333,90.1667 36.5,90.5C 37.8072,87.6151 39.8072,85.2818 42.5,83.5C 42.8333,81.5 43.1667,79.5 43.5,77.5 Z"
        />

        <path
          className="opacity:1"
          fill="#dcd5cc"
          d="M 28.5,86.5 C 30.5273,86.3379 32.5273,86.5045 34.5,87C 35.8228,87.8159 36.4894,88.9826 36.5,90.5C 35.8333,90.1667 35.1667,89.8333 34.5,89.5C 32.3713,88.7972 30.3713,87.7972 28.5,86.5 Z"
        />

        <path
          className="opacity:1"
          fill="#b7ac9d"
          d="M 32.5,78.5 C 32.5,79.5 32.5,80.5 32.5,81.5C 31.1266,81.3433 29.7932,81.51 28.5,82C 30.519,82.4497 32.3523,83.283 34,84.5C 34.414,84.0426 34.914,83.7093 35.5,83.5C 36.5939,85.8362 37.9272,85.8362 39.5,83.5C 37.7256,82.8133 36.0589,81.9799 34.5,81C 35.549,80.5078 36.549,80.6744 37.5,81.5C 37.1086,80.1095 37.9419,79.1095 40,78.5C 40.3095,79.7659 40.8095,80.9326 41.5,82C 40.2881,83.1068 40.6214,83.6068 42.5,83.5C 39.8072,85.2818 37.8072,87.6151 36.5,90.5C 36.4894,88.9826 35.8228,87.8159 34.5,87C 32.5273,86.5045 30.5273,86.3379 28.5,86.5C 27.7515,84.6675 26.7515,83.0009 25.5,81.5C 25.9382,81.5654 26.2716,81.3988 26.5,81C 23.8333,80.3333 23.8333,79.6667 26.5,79C 30.8529,78.4674 31.1862,78.8007 27.5,80C 29.5433,80.64 31.2099,80.14 32.5,78.5 Z"
        />

        <path
          className="opacity:1"
          fill="#bbb1a2"
          d="M 28.5,86.5 C 30.3713,87.7972 32.3713,88.7972 34.5,89.5C 33.1266,89.3433 31.7932,89.51 30.5,90C 35.6493,90.1339 36.816,92.3005 34,96.5C 33.3333,95.1667 32.6667,95.1667 32,96.5C 31.3828,95.5509 31.5494,94.7175 32.5,94C 30.652,92.482 29.152,90.6487 28,88.5C 27.1482,89.5707 26.3149,90.5707 25.5,91.5C 24.7822,89.8632 24.6155,88.1966 25,86.5C 26.073,86.7986 27.2397,86.7986 28.5,86.5 Z"
        />

        <path
          className="opacity:1"
          fill="#c3b9ac"
          d="M 50.5,86.5 C 50.6529,89.5772 49.9863,92.4105 48.5,95C 48.6448,96.2259 48.9781,97.3926 49.5,98.5C 51.7714,98.7716 54.1047,98.7716 56.5,98.5C 56.6567,99.8734 56.49,101.207 56,102.5C 54.2298,100.582 52.0631,100.082 49.5,101C 50.5243,102.367 50.0243,103.2 48,103.5C 47.0646,97.2195 44.5646,96.8862 40.5,102.5C 39.5084,102.672 38.8417,102.338 38.5,101.5C 39.0906,100.849 39.7573,100.182 40.5,99.5C 39.0977,98.1575 39.4311,97.3242 41.5,97C 40.8807,95.1652 40.714,92.9986 41,90.5C 43.0354,88.0881 44.0354,88.7548 44,92.5C 44.7636,88.9005 46.9302,86.9005 50.5,86.5 Z"
        />

        <path
          className="opacity:1"
          fill="#d4ccc2"
          d="M 67.5,96.5 C 73.8735,97.6249 80.2068,97.7915 86.5,97C 72.1502,107.306 56.8168,109.139 40.5,102.5C 44.5646,96.8862 47.0646,97.2195 48,103.5C 50.0243,103.2 50.5243,102.367 49.5,101C 52.0631,100.082 54.2298,100.582 56,102.5C 56.49,101.207 56.6567,99.8734 56.5,98.5C 59.4748,100.689 61.9748,100.023 64,96.5C 64.9862,97.1712 66.1529,97.1712 67.5,96.5 Z"
        />
      </svg>
    </>
  );
}
