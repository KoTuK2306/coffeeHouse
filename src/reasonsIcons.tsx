import { Reasons } from "./interfaces/Reasons";

const icons = {
  cupOfCoffee: (
    <svg width="72" height="94" viewBox="0 0 72 94" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.0679 16.7085L71.1061 16.6968L68.1803 7.9195C67.396 5.26694 62.5051 0 36 0C9.49494 0 4.604 5.26694 3.8285 7.91656L0.90275 16.6968L0.938 16.7085C0.835188 16.9993 0.75 17.2989 0.75 17.625C0.75 20.6389 3.11469 22.9272 6.72194 24.6544L12.5147 85.4695C12.5235 85.5459 12.5676 85.6134 12.5764 85.6898C13.4165 93.7415 33.6441 94 36 94C38.3559 94 58.5835 93.7415 59.4266 85.6898C59.4383 85.6134 59.4853 85.5459 59.4883 85.4695L65.281 24.6544C68.8853 22.9272 71.25 20.6389 71.25 17.625C71.25 17.3019 71.1648 16.9993 71.0679 16.7085ZM36 5.875C49.019 5.875 57.479 7.48181 61.0158 8.8125C57.479 10.1432 49.019 11.75 36 11.75C22.981 11.75 14.5181 10.1432 10.9872 8.8125C14.5181 7.48181 22.981 5.875 36 5.875ZM53.6514 84.7792C52.4764 85.9836 46.2871 88.125 36 88.125C25.7129 88.125 19.5206 85.9836 18.3486 84.7792L16.7623 68.1294C23.5979 70.3179 33.2388 70.5 36 70.5C38.7583 70.5 48.3992 70.3208 55.2377 68.1412L53.6514 84.7792ZM58.0841 38.2844C54.8734 39.5622 47.3299 41.125 36 41.125C24.6701 41.125 17.1266 39.5622 13.9188 38.2844L12.8261 26.8017C20.1169 28.7052 29.2526 29.375 36 29.375C42.7474 29.375 51.8831 28.7052 59.1739 26.8017L58.0841 38.2844ZM36 23.5C18.6864 23.5 7.99681 19.7899 6.73075 17.7807L8.082 13.7299C12.2621 15.7832 20.3402 17.625 36 17.625C51.6598 17.625 59.7379 15.7832 63.918 13.7299L65.2487 17.719C63.8211 19.8546 53.1667 23.5 36 23.5Z" />
    </svg>
  ),
  coffeeBean: (
    <svg width="89" height="83" viewBox="0 0 89 83" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.7412 76.1178C27.5418 76.1964 23.3685 75.4419 19.4625 73.8979C15.5565 72.3539 11.9952 70.0511 8.9846 67.1225C-4.55571 53.5822 -2.56728 29.5631 13.4349 13.4662C29.4371 -2.63065 53.4877 -4.5244 67.0912 9.01591C70.7983 12.8856 73.5017 17.6041 74.9652 22.7593C76.4287 27.9145 76.6078 33.3496 75.4868 38.59C75.3333 39.4089 74.8623 40.1339 74.1764 40.6069C73.4906 41.0799 72.6455 41.2625 71.8255 41.115C71.4172 41.0426 71.0271 40.8905 70.6776 40.6673C70.3281 40.4441 70.026 40.1542 69.7885 39.8141C69.5511 39.4741 69.383 39.0907 69.2939 38.6856C69.2047 38.2806 69.1963 37.862 69.269 37.4537C70.2003 33.2179 70.0834 28.8187 68.9283 24.6384C67.7732 20.458 65.6149 16.6229 62.6409 13.4662C51.5308 2.60873 31.4887 4.62873 17.9799 18.169C4.47116 31.7094 2.4196 51.72 13.498 62.7984C20.6627 69.9631 32.0883 71.92 43.293 67.8484C43.6846 67.7084 44.1001 67.6472 44.5154 67.6683C44.9308 67.6894 45.3378 67.7923 45.7133 67.9713C46.0887 68.1502 46.4251 68.4015 46.703 68.7108C46.981 69.0202 47.1951 69.3814 47.333 69.7737C47.6173 70.5606 47.5775 71.4282 47.2224 72.1857C46.8673 72.9433 46.2259 73.5288 45.4393 73.8137C41.0405 75.3668 36.406 76.1464 31.7412 76.1178Z" />
      <path d="M20.1893 59.2634C19.5697 59.2629 18.964 59.0801 18.4477 58.7377C17.9313 58.3953 17.5271 57.9086 17.2855 57.3381C17.1285 56.947 17.0514 56.5284 17.0588 56.107C17.0662 55.6856 17.1579 55.2699 17.3286 54.8846C17.4992 54.4992 17.7453 54.1519 18.0523 53.8631C18.3593 53.5744 18.721 53.3501 19.1161 53.2034L27.9852 49.3843C29.5222 48.7262 30.8576 47.6727 31.8555 46.3311C32.8534 44.9895 33.4782 43.4076 33.6665 41.7462L34.3293 35.7809C34.6032 33.1791 35.5196 30.6861 36.9962 28.5264C38.4727 26.3667 40.463 24.608 42.788 23.4084L54.4977 17.5693C55.2431 17.227 56.0925 17.1882 56.8659 17.4613C57.6394 17.7344 58.2761 18.2978 58.6413 19.0323C59.0065 19.7668 59.0714 20.6146 58.8223 21.3961C58.5732 22.1776 58.0296 22.8314 57.3068 23.219L45.5971 29.0581C44.184 29.7645 42.9702 30.8132 42.0661 32.1087C41.162 33.4042 40.5964 34.9053 40.4208 36.4753L39.758 42.4406C39.4267 45.1909 38.3772 47.8055 36.7151 50.0217C35.053 52.2378 32.8368 53.9774 30.2893 55.0656L21.4518 58.8847C21.059 59.0904 20.6304 59.2189 20.1893 59.2634Z" />
      <path d="M69.6162 82.4303C65.8707 82.4303 62.2093 81.3196 59.095 79.2388C55.9808 77.1579 53.5535 74.2002 52.1202 70.7399C50.6869 67.2795 50.3118 63.4718 51.0425 59.7983C51.7732 56.1248 53.5769 52.7504 56.2253 50.102C58.8738 47.4535 62.2481 45.6499 65.9216 44.9192C69.5952 44.1885 73.4029 44.5635 76.8632 45.9968C80.3236 47.4302 83.2812 49.8574 85.3621 52.9717C87.443 56.0859 88.5537 59.7473 88.5537 63.4928C88.5537 68.5153 86.5585 73.3322 83.007 76.8836C79.4555 80.4351 74.6387 82.4303 69.6162 82.4303ZM69.6162 50.8678C67.1192 50.8678 64.6783 51.6083 62.6021 52.9955C60.5259 54.3828 58.9077 56.3545 57.9522 58.6614C56.9966 60.9683 56.7466 63.5068 57.2337 65.9558C57.7209 68.4048 58.9233 70.6544 60.6889 72.42C62.4546 74.1857 64.7041 75.3881 67.1531 75.8752C69.6022 76.3624 72.1406 76.1123 74.4475 75.1568C76.7545 74.2012 78.7262 72.583 80.1135 70.5069C81.5007 68.4307 82.2412 65.9898 82.2412 63.4928C82.2412 60.1444 80.911 56.9332 78.5434 54.5656C76.1757 52.1979 72.9645 50.8678 69.6162 50.8678Z" />
      <path d="M69.6161 71.0994C69.2008 71.1018 68.789 71.0222 68.4044 70.8651C68.0199 70.7081 67.6701 70.4766 67.3752 70.1841L62.9249 65.7338C62.6291 65.4404 62.3942 65.0913 62.234 64.7067C62.0738 64.322 61.9913 63.9095 61.9913 63.4928C61.9913 63.0762 62.0738 62.6636 62.234 62.279C62.3942 61.8944 62.6291 61.5453 62.9249 61.2519C63.5162 60.6641 64.3162 60.3341 65.15 60.3341C65.9839 60.3341 66.7838 60.6641 67.3752 61.2519L69.3952 63.2719L73.4983 58.3166C74.0341 57.672 74.8039 57.2667 75.6385 57.1897C76.4731 57.1128 77.3041 57.3705 77.9486 57.9063C78.5932 58.442 78.9985 59.2119 79.0755 60.0465C79.1524 60.8811 78.8947 61.712 78.3589 62.3566L72.0464 69.9632C71.7671 70.2997 71.4208 70.5744 71.0296 70.77C70.6384 70.9656 70.2108 71.0778 69.7739 71.0994H69.6161Z" />
    </svg>
  ),
  barista: (
    <svg width="87" height="90" viewBox="0 0 87 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.28125 39.7515C9.15978 39.7515 10.0023 39.4025 10.6235 38.7813C11.2448 38.16 11.5938 37.3175 11.5938 36.439C11.5938 35.5604 11.2448 34.7179 10.6235 34.0967C10.0023 33.4755 9.15978 33.1265 8.28125 33.1265C7.84199 33.1265 7.42071 32.952 7.1101 32.6414C6.7995 32.3308 6.625 31.9095 6.625 31.4702C6.625 31.0309 6.7995 30.6097 7.1101 30.2991C7.42071 29.9885 7.84199 29.814 8.28125 29.814H10.2025C10.9857 34.4473 13.3852 38.6534 16.9752 41.6854C20.5652 44.7175 25.1134 46.3795 29.8125 46.3765C33.3266 46.3765 36.6968 44.9805 39.1817 42.4956C41.6665 40.0108 43.0625 36.6406 43.0625 33.1265V18.2533C45.2854 17.2148 47.2498 15.6954 48.8137 13.805C50.3777 11.9145 51.502 9.7002 52.1056 7.32209L52.9006 4.00959C53.0247 3.52069 53.0355 3.00991 52.9321 2.51622C52.8288 2.02252 52.6141 1.55894 52.3044 1.16084C51.9826 0.784223 51.5805 0.484565 51.1276 0.283921C50.6747 0.0832765 50.1826 -0.0132458 49.6875 0.00146034H13.25C10.6144 0.00146034 8.08677 1.04844 6.22313 2.91209C4.35948 4.77573 3.3125 7.30337 3.3125 9.93896V16.564C3.3125 17.4425 3.6615 18.285 4.28271 18.9063C4.90392 19.5275 5.74647 19.8765 6.625 19.8765H36.4375V33.1265C36.4375 34.8835 35.7395 36.5686 34.4971 37.811C33.2547 39.0535 31.5696 39.7515 29.8125 39.7515C26.2984 39.7515 22.9282 38.3555 20.4433 35.8706C17.9585 33.3858 16.5625 30.0156 16.5625 26.5015C16.5625 25.6229 16.2135 24.7804 15.5923 24.1592C14.9711 23.538 14.1285 23.189 13.25 23.189H8.28125C6.08493 23.189 3.97856 24.0614 2.42552 25.6145C0.872486 27.1675 0 29.2739 0 31.4702C0 33.6665 0.872486 35.7729 2.42552 37.3259C3.97856 38.879 6.08493 39.7515 8.28125 39.7515ZM9.9375 13.2515V9.93896C9.9375 9.06043 10.2865 8.21788 10.9077 7.59667C11.5289 6.97546 12.3715 6.62646 13.25 6.62646H45.4144C44.7291 8.56479 43.4595 10.2429 41.7805 11.4294C40.1015 12.6159 38.0959 13.2525 36.04 13.2515H9.9375Z" />
      <path d="M76.1875 82.814H58.1013L52.4369 74.3671C52.1368 73.9114 51.7288 73.5369 51.2492 73.2769C50.7695 73.0168 50.2331 72.8793 49.6875 72.8765H13.25C12.0197 72.8765 10.8136 72.5339 9.76704 71.887C8.72045 71.2402 7.87465 70.3147 7.32443 69.2143C6.7742 68.1138 6.54128 66.8819 6.65178 65.6565C6.76227 64.4311 7.2118 63.2607 7.95001 62.2765L15.9 51.6765C16.161 51.3285 16.3509 50.9325 16.4589 50.5111C16.5668 50.0897 16.5907 49.6511 16.5292 49.2205C16.4677 48.7899 16.322 48.3756 16.1003 48.0013C15.8787 47.627 15.5855 47.3 15.2375 47.039C14.8895 46.778 14.4935 46.5881 14.0721 46.4801C13.6507 46.3721 13.2122 46.3482 12.7815 46.4098C12.3509 46.4713 11.9366 46.617 11.5623 46.8386C11.188 47.0603 10.861 47.3535 10.6 47.7015L2.65001 58.3015C1.1736 60.27 0.274528 62.6108 0.0535453 65.0615C-0.167438 67.5123 0.298396 69.9761 1.39885 72.177C2.4993 74.3779 4.19089 76.2289 6.28407 77.5226C8.37725 78.8162 10.7893 79.5015 13.25 79.5015H47.8988L53.5631 87.9483C53.8632 88.404 54.2712 88.7785 54.7508 89.0386C55.2305 89.2986 55.7669 89.4361 56.3125 89.439H76.1875C77.066 89.439 77.9086 89.09 78.5298 88.4688C79.151 87.8475 79.5 87.005 79.5 86.1265C79.5 85.2479 79.151 84.4054 78.5298 83.7842C77.9086 83.163 77.066 82.814 76.1875 82.814Z" />
      <path d="M28.5537 29.549L29.15 29.7477H29.8125C30.4704 29.7515 31.1146 29.5594 31.6629 29.1956C32.2112 28.8319 32.6387 28.3132 32.891 27.7055C33.1433 27.0978 33.2089 26.4288 33.0795 25.7837C32.9501 25.1386 32.6315 24.5467 32.1644 24.0834C31.8564 23.7729 31.49 23.5264 31.0864 23.3583C30.6827 23.1901 30.2498 23.1035 29.8125 23.1035C29.3752 23.1035 28.9422 23.1901 28.5386 23.3583C28.1349 23.5264 27.7685 23.7729 27.4606 24.0834C27.1501 24.3913 26.9037 24.7577 26.7355 25.1613C26.5674 25.565 26.4808 25.9979 26.4808 26.4352C26.4808 26.8725 26.5674 27.3055 26.7355 27.7091C26.9037 28.1128 27.1501 28.4792 27.4606 28.7871L27.9575 29.1846L28.5537 29.549Z" />
      <path d="M69.5625 36.439C60.42 36.439 53 45.3496 53 56.314C53 67.2783 60.42 76.189 69.5625 76.189C78.705 76.189 86.125 67.2783 86.125 56.314C86.125 45.3496 78.705 36.439 69.5625 36.439ZM69.5625 69.564C64.0969 69.564 59.625 63.6346 59.625 56.314C59.625 48.9933 64.0969 43.064 69.5625 43.064C75.0281 43.064 79.5 48.9933 79.5 56.314C79.5 63.6346 75.0281 69.564 69.5625 69.564Z" />
      <path d="M74.6969 24.4808C74.78 24.5384 74.8436 24.62 74.8791 24.7147C74.9146 24.8094 74.9204 24.9127 74.8957 25.0108L73.2394 28.3233C72.8465 29.1056 72.7793 30.0116 73.0524 30.8434C73.3255 31.6751 73.9167 32.3649 74.6969 32.762C75.1551 33.0073 75.6679 33.1326 76.1875 33.1264C76.7992 33.1246 77.3985 32.9534 77.9189 32.6318C78.4392 32.3102 78.8604 31.8508 79.1357 31.3045L80.7919 27.992C81.2075 27.1703 81.4567 26.2746 81.5251 25.3563C81.5934 24.438 81.4797 23.5153 81.1904 22.6411C80.901 21.7669 80.4418 20.9585 79.839 20.2624C79.2363 19.5662 78.5019 18.996 77.6782 18.5845C77.595 18.5269 77.5314 18.4453 77.4959 18.3506C77.4604 18.2559 77.4546 18.1526 77.4794 18.0545L79.1357 14.742C79.3705 14.3517 79.5223 13.9172 79.5817 13.4655C79.641 13.0139 79.6065 12.5549 79.4804 12.1172C79.3543 11.6795 79.1393 11.2725 78.8488 10.9216C78.5583 10.5708 78.1985 10.2836 77.792 10.0781C77.3855 9.87253 76.941 9.75304 76.4862 9.72707C76.0314 9.7011 75.5762 9.7692 75.1489 9.92712C74.7217 10.085 74.3316 10.3294 74.003 10.6449C73.6745 10.9604 73.4145 11.3403 73.2394 11.7608L71.5832 15.0733C71.1675 15.895 70.9184 16.7907 70.85 17.709C70.7816 18.6273 70.8954 19.55 71.1847 20.4242C71.474 21.2984 71.9333 22.1068 72.536 22.803C73.1388 23.4991 73.8731 24.0693 74.6969 24.4808Z" />
      <path d="M71.0532 55.022C70.97 54.9644 70.9064 54.8828 70.8709 54.7881C70.8354 54.6934 70.8296 54.5901 70.8544 54.492L72.5107 51.1795C72.7455 50.7892 72.8973 50.3547 72.9567 49.903C73.016 49.4514 72.9815 48.9924 72.8554 48.5547C72.7293 48.117 72.5143 47.71 72.2238 47.3591C71.9333 47.0083 71.5735 46.7211 71.167 46.5156C70.7605 46.31 70.316 46.1905 69.8612 46.1646C69.4064 46.1386 68.9512 46.2067 68.5239 46.3646C68.0967 46.5225 67.7066 46.7669 67.378 47.0824C67.0495 47.3979 66.7895 47.7778 66.6144 48.1983L64.9582 51.5108C64.5425 52.3325 64.2934 53.2282 64.225 54.1465C64.1566 55.0648 64.2704 55.9875 64.5597 56.8617C64.849 57.7359 65.3083 58.5443 65.911 59.2405C66.5138 59.9366 67.2481 60.5068 68.0719 60.9183C68.155 60.9759 68.2186 61.0575 68.2541 61.1522C68.2896 61.2469 68.2954 61.3502 68.2707 61.4483C67.8778 62.2306 67.8105 63.1366 68.0836 63.9684C68.3567 64.8001 68.948 65.4899 69.7281 65.887C70.1863 66.1323 70.6991 66.2576 71.2188 66.2514C71.8305 66.2496 72.4297 66.0784 72.9501 65.7568C73.4705 65.4352 73.8916 64.9758 74.1669 64.4295C74.5825 63.6078 74.8317 62.7121 74.9001 61.7938C74.9684 60.8755 74.8547 59.9528 74.5654 59.0786C74.276 58.2044 73.8168 57.396 73.214 56.6999C72.6113 56.0037 71.8769 55.4335 71.0532 55.022Z" />
      <path d="M61.4469 24.4808C61.53 24.5384 61.5936 24.62 61.6291 24.7147C61.6646 24.8094 61.6704 24.9127 61.6457 25.0108L59.9894 28.3233C59.5965 29.1056 59.5293 30.0116 59.8024 30.8434C60.0755 31.6751 60.6667 32.3649 61.4469 32.762C61.9051 33.0073 62.4179 33.1326 62.9375 33.1264C63.5492 33.1246 64.1485 32.9534 64.6689 32.6318C65.1892 32.3102 65.6104 31.8508 65.8857 31.3045L67.5419 27.992C67.9575 27.1703 68.2067 26.2746 68.2751 25.3563C68.3434 24.438 68.2297 23.5153 67.9404 22.6411C67.651 21.7669 67.1918 20.9585 66.589 20.2624C65.9863 19.5662 65.2519 18.996 64.4282 18.5845C64.345 18.5269 64.2814 18.4453 64.2459 18.3506C64.2104 18.2559 64.2046 18.1526 64.2294 18.0545L65.8857 14.742C66.1205 14.3517 66.2723 13.9172 66.3317 13.4655C66.391 13.0139 66.3565 12.5549 66.2304 12.1172C66.1043 11.6795 65.8893 11.2725 65.5988 10.9216C65.3083 10.5708 64.9485 10.2836 64.542 10.0781C64.1355 9.87253 63.691 9.75304 63.2362 9.72707C62.7814 9.7011 62.3262 9.7692 61.8989 9.92712C61.4717 10.085 61.0816 10.3294 60.753 10.6449C60.4245 10.9604 60.1645 11.3403 59.9894 11.7608L58.3332 15.0733C57.9175 15.895 57.6684 16.7907 57.6 17.709C57.5316 18.6273 57.6454 19.55 57.9347 20.4242C58.224 21.2984 58.6833 22.1068 59.286 22.803C59.8888 23.4991 60.6231 24.0693 61.4469 24.4808Z" />
      <path d="M30.1769 64.7608C29.784 65.5431 29.7167 66.4491 29.9898 67.2809C30.263 68.1126 30.8542 68.8024 31.6344 69.1995C32.0926 69.4448 32.6054 69.5701 33.125 69.5639C33.7367 69.562 34.336 69.3908 34.8563 69.0693C35.3767 68.7477 35.7979 68.2883 36.0731 67.742L36.4375 67.0464C37.5916 64.7432 38.1926 62.2026 38.1926 59.6264C38.1926 57.0502 37.5916 54.5096 36.4375 52.2064L36.0731 51.5108C35.6419 50.7941 34.9555 50.2671 34.1518 50.0356C33.3481 49.804 32.4866 49.8851 31.7402 50.2625C30.9938 50.6399 30.4178 51.2857 30.1278 52.0702C29.8378 52.8547 29.8554 53.7199 30.1769 54.492L30.5081 55.1877C31.1963 56.5661 31.5546 58.0857 31.5546 59.6264C31.5546 61.1671 31.1963 62.6867 30.5081 64.0652L30.1769 64.7608Z" />
    </svg>
  ),
};

export const reasonsIcons: Reasons[] = [
  {
    id: "cupOfCoffee",
    description: "можно взять с собой",
    icon: icons.cupOfCoffee,
  },
  {
    id: "coffeeBean",
    description: "кофе на любой вкус",
    icon: icons.coffeeBean,
  },
  {
    id: "barista",
    description: "профессиональный бариста",
    icon: icons.barista,
  },
];
