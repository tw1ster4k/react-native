import React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { useSelector } from 'react-redux';


const True = () => {
    const theme = useSelector((state) => state.theme)
  return (
    theme ?
    <Svg
    style={{marginTop:34,marginBottom:120,marginLeft:10}}
    width={368}
    height={102}
    viewBox="0 0 368 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M150.862 50.2647C150.862 55.9338 146.191 60.5295 140.431 60.5295C134.67 60.5295 130 55.9338 130 50.2647C130 44.5957 134.67 40 140.431 40C146.191 40 150.862 44.5957 150.862 50.2647Z"
      fill="#02B897"
    />
    <G filter="url(#filter0_d_736_4290)">
      <Path
        d="M150.862 50.2647C150.862 55.9338 146.191 60.5295 140.431 60.5295C134.67 60.5295 130 55.9338 130 50.2647C130 44.5957 134.67 40 140.431 40C146.191 40 150.862 44.5957 150.862 50.2647Z"
        fill="url(#paint0_linear_736_4290)"
      />
    </G>
    <G filter="url(#filter1_d_736_4290)">
      <Path
        d="M167.029 43.2825V46.0277H163.01V57.8406H160.076V46.0277H156.078V43.2825H167.029Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter2_d_736_4290)">
      <Path
        d="M169.266 49.2306C169.522 48.5651 169.94 48.066 170.521 47.7333C171.116 47.4005 171.776 47.2341 172.498 47.2341V50.2289C171.662 50.1319 170.911 50.2982 170.245 50.7281C169.593 51.1578 169.266 51.8719 169.266 52.8702V57.8408H166.523V47.4421H169.266V49.2306Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter3_d_736_4290)">
      <Path
        d="M180.457 47.4419H183.2V57.8406H180.457V56.6759C179.79 57.6464 178.734 58.1317 177.288 58.1317C176.126 58.1317 175.162 57.7504 174.396 56.9878C173.645 56.2253 173.27 55.1716 173.27 53.8266V47.4419H176.013V53.4939C176.013 54.1872 176.204 54.721 176.587 55.0953C176.969 55.4558 177.48 55.6361 178.118 55.6361C178.826 55.6361 179.394 55.4211 179.819 54.9913C180.244 54.5615 180.457 53.9168 180.457 53.0571V47.4419Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter4_d_736_4290)">
      <Path
        d="M187.367 53.7435C187.735 55.0468 188.735 55.6985 190.365 55.6985C191.414 55.6985 192.208 55.3518 192.746 54.6586L194.958 55.9064C193.909 57.39 192.364 58.1317 190.322 58.1317C188.565 58.1317 187.154 57.6118 186.091 56.572C185.028 55.5321 184.496 54.2219 184.496 52.6413C184.496 51.0745 185.021 49.7713 186.07 48.7314C187.119 47.6776 188.465 47.1508 190.11 47.1508C191.669 47.1508 192.952 47.6776 193.958 48.7314C194.979 49.7851 195.489 51.0884 195.489 52.6413C195.489 52.9879 195.454 53.3553 195.383 53.7435H187.367ZM187.324 51.6638H192.746C192.59 50.9567 192.264 50.4298 191.768 50.0832C191.286 49.7365 190.733 49.5632 190.11 49.5632C189.373 49.5632 188.763 49.7504 188.281 50.1248C187.799 50.4853 187.48 50.9982 187.324 51.6638Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter5_d_736_4290)">
      <Path
        d="M201.531 58.1317C200.057 58.1317 198.816 57.8128 197.81 57.1751C196.804 56.5234 196.095 55.643 195.684 54.5339L198.193 53.0988C198.774 54.5824 199.915 55.3241 201.616 55.3241C202.438 55.3241 203.041 55.1786 203.424 54.8874C203.806 54.5962 203.998 54.2288 203.998 53.7851C203.998 53.2721 203.764 52.877 203.296 52.5996C202.828 52.3085 201.992 51.9966 200.787 51.6638C200.121 51.4697 199.554 51.2756 199.086 51.0815C198.632 50.8874 198.172 50.6309 197.704 50.312C197.25 49.9792 196.903 49.5632 196.662 49.0641C196.421 48.565 196.3 47.9826 196.3 47.3171C196.3 46 196.775 44.9532 197.725 44.1767C198.689 43.3864 199.844 42.9913 201.191 42.9913C202.396 42.9913 203.452 43.2825 204.359 43.8648C205.281 44.4333 205.997 45.2305 206.507 46.2565L204.04 47.6499C203.445 46.402 202.495 45.7781 201.191 45.7781C200.581 45.7781 200.099 45.9168 199.745 46.1941C199.405 46.4576 199.235 46.8042 199.235 47.234C199.235 47.6915 199.426 48.0659 199.809 48.357C200.206 48.6343 200.957 48.9393 202.063 49.2721C202.516 49.4107 202.857 49.5217 203.083 49.6049C203.324 49.6742 203.643 49.7921 204.04 49.9584C204.451 50.1109 204.763 50.2565 204.976 50.3952C205.203 50.5338 205.458 50.721 205.741 50.9567C206.025 51.1924 206.238 51.435 206.379 51.6846C206.535 51.9341 206.663 52.2392 206.762 52.5996C206.875 52.9463 206.932 53.3276 206.932 53.7436C206.932 55.0884 206.429 56.156 205.422 56.9463C204.43 57.7366 203.133 58.1317 201.531 58.1317Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter6_d_736_4290)">
      <Path
        d="M213.966 47.1507C215.128 47.1507 216.085 47.532 216.836 48.2946C217.602 49.0572 217.985 50.1109 217.985 51.4558V57.8406H215.241V51.7885C215.241 51.0953 215.05 50.5685 214.668 50.2079C214.284 49.8336 213.774 49.6464 213.136 49.6464C212.428 49.6464 211.861 49.8613 211.435 50.2911C211.01 50.721 210.798 51.3657 210.798 52.2253V57.8406H208.055V43.2825H210.798V48.6065C211.464 47.636 212.52 47.1507 213.966 47.1507Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter7_d_736_4290)">
      <Path
        d="M228.72 56.5511C227.629 57.6049 226.296 58.1317 224.723 58.1317C223.15 58.1317 221.817 57.6049 220.725 56.5511C219.648 55.4836 219.109 54.1802 219.109 52.6413C219.109 51.1023 219.648 49.8059 220.725 48.7521C221.817 47.6845 223.15 47.1508 224.723 47.1508C226.296 47.1508 227.629 47.6845 228.72 48.7521C229.812 49.8059 230.358 51.1023 230.358 52.6413C230.358 54.1802 229.812 55.4836 228.72 56.5511ZM222.66 54.7002C223.213 55.2409 223.901 55.5113 224.723 55.5113C225.545 55.5113 226.233 55.2409 226.786 54.7002C227.338 54.1594 227.615 53.4731 227.615 52.6413C227.615 51.8093 227.338 51.123 226.786 50.5823C226.233 50.0416 225.545 49.7713 224.723 49.7713C223.901 49.7713 223.213 50.0416 222.66 50.5823C222.122 51.123 221.853 51.8093 221.853 52.6413C221.853 53.4731 222.122 54.1594 222.66 54.7002Z"
        fill="#1C1C1C"
      />
    </G>
    <G filter="url(#filter8_d_736_4290)">
      <Path
        d="M237.809 47.1508C239.241 47.1508 240.46 47.6845 241.467 48.7521C242.487 49.8059 242.998 51.1022 242.998 52.6413C242.998 54.1802 242.487 55.4836 241.467 56.5511C240.46 57.6049 239.241 58.1317 237.809 58.1317C236.321 58.1317 235.173 57.6257 234.364 56.6136V62.0001H231.621V47.4419H234.364V48.669C235.173 47.6568 236.321 47.1508 237.809 47.1508ZM235.194 54.7626C235.746 55.3033 236.448 55.5737 237.299 55.5737C238.149 55.5737 238.851 55.3033 239.404 54.7626C239.971 54.208 240.254 53.5009 240.254 52.6413C240.254 51.7816 239.971 51.0815 239.404 50.5407C238.851 49.9861 238.149 49.7088 237.299 49.7088C236.448 49.7088 235.746 49.9861 235.194 50.5407C234.641 51.0815 234.364 51.7816 234.364 52.6413C234.364 53.5009 234.641 54.208 235.194 54.7626Z"
        fill="#1C1C1C"
      />
    </G>
    <Path
      d="M112.427 75.307C111.863 75.857 111.181 76.132 110.381 76.132C109.567 76.132 108.882 75.857 108.324 75.307C107.767 74.7497 107.488 74.064 107.488 73.25C107.488 72.436 107.767 71.754 108.324 71.204C108.882 70.6467 109.567 70.368 110.381 70.368C111.188 70.368 111.87 70.6467 112.427 71.204C112.992 71.754 113.274 72.436 113.274 73.25C113.274 74.0567 112.992 74.7423 112.427 75.307ZM108.841 74.801C109.259 75.219 109.773 75.428 110.381 75.428C110.99 75.428 111.503 75.219 111.921 74.801C112.339 74.3683 112.548 73.8513 112.548 73.25C112.548 72.6413 112.339 72.128 111.921 71.71C111.503 71.2847 110.99 71.072 110.381 71.072C109.773 71.072 109.259 71.2847 108.841 71.71C108.423 72.128 108.214 72.6413 108.214 73.25C108.214 73.8513 108.423 74.3683 108.841 74.801ZM118.383 72.898V70.5H119.109V76H118.383V73.602H115.215V76H114.489V70.5H115.215V72.898H118.383ZM121.217 70.5H125.155V76H124.429V71.204H121.943V73.657C121.943 74.5737 121.767 75.2043 121.415 75.549C121.07 75.8937 120.593 76.044 119.985 76V75.318C120.41 75.362 120.722 75.2593 120.92 75.01C121.118 74.7607 121.217 74.3097 121.217 73.657V70.5ZM131.422 71.578V70.5H132.148V76H131.422V74.922C130.916 75.7287 130.176 76.132 129.2 76.132C128.416 76.132 127.745 75.8533 127.187 75.296C126.637 74.7387 126.362 74.0567 126.362 73.25C126.362 72.4433 126.637 71.7613 127.187 71.204C127.745 70.6467 128.416 70.368 129.2 70.368C130.176 70.368 130.916 70.7713 131.422 71.578ZM127.715 74.801C128.133 75.219 128.647 75.428 129.255 75.428C129.864 75.428 130.377 75.219 130.795 74.801C131.213 74.3683 131.422 73.8513 131.422 73.25C131.422 72.6413 131.213 72.128 130.795 71.71C130.377 71.2847 129.864 71.072 129.255 71.072C128.647 71.072 128.133 71.2847 127.715 71.71C127.297 72.128 127.088 72.6413 127.088 73.25C127.088 73.8513 127.297 74.3683 127.715 74.801ZM137.426 69.62H134.566V68.982H137.426V69.62ZM134.412 74.735L137.69 70.5H138.306V76H137.58V71.765L134.302 76H133.686V70.5H134.412V74.735ZM143.735 72.898V70.5H144.461V76H143.735V73.602H140.567V76H139.841V70.5H140.567V72.898H143.735ZM151.694 70.368C152.479 70.368 153.146 70.6467 153.696 71.204C154.253 71.7613 154.532 72.4433 154.532 73.25C154.532 74.0567 154.253 74.7387 153.696 75.296C153.146 75.8533 152.479 76.132 151.694 76.132C150.719 76.132 149.978 75.7287 149.472 74.922V78.2H148.746V70.5H149.472V71.578C149.978 70.7713 150.719 70.368 151.694 70.368ZM150.099 74.801C150.517 75.219 151.03 75.428 151.639 75.428C152.248 75.428 152.761 75.219 153.179 74.801C153.597 74.3683 153.806 73.8513 153.806 73.25C153.806 72.6413 153.597 72.128 153.179 71.71C152.761 71.2847 152.248 71.072 151.639 71.072C151.03 71.072 150.517 71.2847 150.099 71.71C149.681 72.128 149.472 72.6413 149.472 73.25C149.472 73.8513 149.681 74.3683 150.099 74.801ZM158.28 70.368C159.102 70.368 159.758 70.6577 160.249 71.237C160.755 71.809 161.008 72.4873 161.008 73.272C161.008 73.3087 161.001 73.4223 160.986 73.613H156.157C156.231 74.163 156.465 74.603 156.861 74.933C157.257 75.263 157.752 75.428 158.346 75.428C159.182 75.428 159.773 75.1163 160.117 74.493L160.755 74.867C160.513 75.263 160.18 75.5747 159.754 75.802C159.336 76.022 158.863 76.132 158.335 76.132C157.47 76.132 156.766 75.8607 156.223 75.318C155.681 74.7753 155.409 74.086 155.409 73.25C155.409 72.4213 155.677 71.7357 156.212 71.193C156.748 70.643 157.437 70.368 158.28 70.368ZM158.28 71.072C157.708 71.072 157.228 71.2407 156.839 71.578C156.458 71.9153 156.231 72.359 156.157 72.909H160.26C160.18 72.3223 159.956 71.8713 159.589 71.556C159.208 71.2333 158.772 71.072 158.28 71.072ZM168.807 75.296V70.5H169.533V76H162.163V70.5H162.889V75.296H165.485V70.5H166.211V75.296H168.807ZM173.609 70.368C174.431 70.368 175.087 70.6577 175.578 71.237C176.084 71.809 176.337 72.4873 176.337 73.272C176.337 73.3087 176.33 73.4223 176.315 73.613H171.486C171.56 74.163 171.794 74.603 172.19 74.933C172.586 75.263 173.081 75.428 173.675 75.428C174.511 75.428 175.102 75.1163 175.446 74.493L176.084 74.867C175.842 75.263 175.509 75.5747 175.083 75.802C174.665 76.022 174.192 76.132 173.664 76.132C172.799 76.132 172.095 75.8607 171.552 75.318C171.01 74.7753 170.738 74.086 170.738 73.25C170.738 72.4213 171.006 71.7357 171.541 71.193C172.077 70.643 172.766 70.368 173.609 70.368ZM173.609 71.072C173.037 71.072 172.557 71.2407 172.168 71.578C171.787 71.9153 171.56 72.359 171.486 72.909H175.589C175.509 72.3223 175.285 71.8713 174.918 71.556C174.537 71.2333 174.101 71.072 173.609 71.072ZM181.386 72.898V70.5H182.112V76H181.386V73.602H178.218V76H177.492V70.5H178.218V72.898H181.386ZM184.373 74.735L187.651 70.5H188.267V76H187.541V71.765L184.263 76H183.647V70.5H184.373V74.735ZM191.53 70.5H193.763V76H193.037V73.888H192.091L190.397 76H189.473L191.211 73.866C190.763 73.8 190.397 73.6167 190.111 73.316C189.832 73.008 189.693 72.6377 189.693 72.205C189.693 71.7137 189.869 71.3067 190.221 70.984C190.587 70.6613 191.024 70.5 191.53 70.5ZM191.53 73.206H193.037V71.204H191.53C191.214 71.204 190.95 71.2993 190.738 71.49C190.525 71.6733 190.419 71.9117 190.419 72.205C190.419 72.4983 190.525 72.7403 190.738 72.931C190.95 73.1143 191.214 73.206 191.53 73.206ZM202.673 70.5V75.296H203.443V77.474H202.717V76H198.229V77.474H197.503V75.296H198.174C198.548 74.7973 198.735 74.1043 198.735 73.217V70.5H202.673ZM199.054 75.296H201.947V71.204H199.461V73.217C199.461 74.0677 199.325 74.7607 199.054 75.296ZM205.113 70.5H209.051V76H208.325V71.204H205.839V73.657C205.839 74.5737 205.663 75.2043 205.311 75.549C204.966 75.8937 204.49 76.044 203.881 76V75.318C204.306 75.362 204.618 75.2593 204.816 75.01C205.014 74.7607 205.113 74.3097 205.113 73.657V70.5ZM212.316 70.5H214.549V76H213.823V73.888H212.877L211.183 76H210.259L211.997 73.866C211.55 73.8 211.183 73.6167 210.897 73.316C210.618 73.008 210.479 72.6377 210.479 72.205C210.479 71.7137 210.655 71.3067 211.007 70.984C211.374 70.6613 211.81 70.5 212.316 70.5ZM212.316 73.206H213.823V71.204H212.316C212.001 71.204 211.737 71.2993 211.524 71.49C211.311 71.6733 211.205 71.9117 211.205 72.205C211.205 72.4983 211.311 72.7403 211.524 72.931C211.737 73.1143 212.001 73.206 212.316 73.206ZM221.281 76.132C220.496 76.132 219.836 75.8717 219.301 75.351C218.773 74.823 218.509 74.141 218.509 73.305C218.509 72.3663 218.648 71.6477 218.927 71.149C219.206 70.643 219.77 70.1847 220.621 69.774C220.892 69.6493 221.105 69.554 221.259 69.488C221.516 69.3853 221.717 69.2973 221.864 69.224C222.502 68.9307 222.825 68.5677 222.832 68.135L223.404 68.465C223.367 68.6483 223.309 68.8133 223.228 68.96C223.133 69.1213 223.037 69.2497 222.942 69.345C222.854 69.4403 222.715 69.543 222.524 69.653C222.399 69.7263 222.249 69.807 222.073 69.895L221.523 70.126L221.006 70.346C220.5 70.566 220.122 70.797 219.873 71.039C219.631 71.2737 219.459 71.5817 219.356 71.963C219.591 71.6477 219.899 71.4093 220.28 71.248C220.661 71.0793 221.046 70.995 221.435 70.995C222.168 70.995 222.773 71.237 223.25 71.721C223.734 72.1977 223.976 72.81 223.976 73.558C223.976 74.2987 223.719 74.9147 223.206 75.406C222.7 75.89 222.058 76.132 221.281 76.132ZM219.851 74.867C220.232 75.2263 220.709 75.406 221.281 75.406C221.853 75.406 222.322 75.2337 222.689 74.889C223.063 74.537 223.25 74.0933 223.25 73.558C223.25 73.0153 223.074 72.5717 222.722 72.227C222.377 71.875 221.915 71.699 221.336 71.699C220.815 71.699 220.342 71.864 219.917 72.194C219.492 72.5093 219.279 72.942 219.279 73.492C219.279 74.0493 219.47 74.5077 219.851 74.867ZM225.806 74.735L229.084 70.5H229.7V76H228.974V71.765L225.696 76H225.08V70.5H225.806V74.735ZM234.073 73.173C234.711 73.415 235.03 73.855 235.03 74.493C235.03 74.955 234.851 75.3437 234.491 75.659C234.147 75.9743 233.641 76.132 232.973 76.132C231.859 76.132 231.133 75.692 230.795 74.812L231.411 74.449C231.646 75.1017 232.167 75.428 232.973 75.428C233.391 75.428 233.718 75.34 233.952 75.164C234.187 74.9807 234.304 74.7423 234.304 74.449C234.304 74.185 234.209 73.976 234.018 73.822C233.828 73.6607 233.571 73.58 233.248 73.58H232.445V72.876H233.028C233.344 72.876 233.589 72.799 233.765 72.645C233.949 72.4837 234.04 72.2637 234.04 71.985C234.04 71.721 233.93 71.5047 233.71 71.336C233.498 71.16 233.215 71.072 232.863 71.072C232.181 71.072 231.723 71.347 231.488 71.897L230.883 71.545C231.25 70.7603 231.91 70.368 232.863 70.368C233.45 70.368 233.912 70.522 234.249 70.83C234.594 71.1307 234.766 71.501 234.766 71.941C234.766 72.5057 234.535 72.9163 234.073 73.173ZM240.028 72.898V70.5H240.754V76H240.028V73.602H236.86V76H236.134V70.5H236.86V72.898H240.028ZM244.83 70.368C245.651 70.368 246.308 70.6577 246.799 71.237C247.305 71.809 247.558 72.4873 247.558 73.272C247.558 73.3087 247.551 73.4223 247.536 73.613H242.707C242.78 74.163 243.015 74.603 243.411 74.933C243.807 75.263 244.302 75.428 244.896 75.428C245.732 75.428 246.322 75.1163 246.667 74.493L247.305 74.867C247.063 75.263 246.729 75.5747 246.304 75.802C245.886 76.022 245.413 76.132 244.885 76.132C244.02 76.132 243.316 75.8607 242.773 75.318C242.23 74.7753 241.959 74.086 241.959 73.25C241.959 72.4213 242.227 71.7357 242.762 71.193C243.297 70.643 243.987 70.368 244.83 70.368ZM244.83 71.072C244.258 71.072 243.778 71.2407 243.389 71.578C243.008 71.9153 242.78 72.359 242.707 72.909H246.81C246.729 72.3223 246.506 71.8713 246.139 71.556C245.758 71.2333 245.321 71.072 244.83 71.072ZM251.276 76.132C250.447 76.132 249.758 75.857 249.208 75.307C248.658 74.7423 248.383 74.0567 248.383 73.25C248.383 72.436 248.658 71.754 249.208 71.204C249.758 70.6467 250.447 70.368 251.276 70.368C251.819 70.368 252.306 70.5 252.739 70.764C253.172 71.0207 253.487 71.369 253.685 71.809L253.091 72.15C252.944 71.82 252.706 71.5597 252.376 71.369C252.053 71.171 251.687 71.072 251.276 71.072C250.667 71.072 250.154 71.2847 249.736 71.71C249.318 72.128 249.109 72.6413 249.109 73.25C249.109 73.8513 249.318 74.3683 249.736 74.801C250.154 75.219 250.667 75.428 251.276 75.428C251.679 75.428 252.042 75.3327 252.365 75.142C252.695 74.9513 252.952 74.6873 253.135 74.35L253.74 74.702C253.513 75.142 253.179 75.4903 252.739 75.747C252.299 76.0037 251.811 76.132 251.276 76.132ZM259.458 71.578V70.5H260.184V76H259.458V74.922C258.952 75.7287 258.212 76.132 257.236 76.132C256.452 76.132 255.781 75.8533 255.223 75.296C254.673 74.7387 254.398 74.0567 254.398 73.25C254.398 72.4433 254.673 71.7613 255.223 71.204C255.781 70.6467 256.452 70.368 257.236 70.368C258.212 70.368 258.952 70.7713 259.458 71.578ZM255.751 74.801C256.169 75.219 256.683 75.428 257.291 75.428C257.9 75.428 258.413 75.219 258.831 74.801C259.249 74.3683 259.458 73.8513 259.458 73.25C259.458 72.6413 259.249 72.128 258.831 71.71C258.413 71.2847 257.9 71.072 257.291 71.072C256.683 71.072 256.169 71.2847 255.751 71.71C255.333 72.128 255.124 72.6413 255.124 73.25C255.124 73.8513 255.333 74.3683 255.751 74.801Z"
      fill="#555555"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_736_4290"
        x1={130}
        y1={60.5295}
        x2={152.868}
        y2={41.6344}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#12D1AF" />
        <Stop offset={1} stopColor="#1BDAD9" />
      </LinearGradient>
    </Defs>
  </Svg>
  :
  <Svg
  style={{marginTop:34,marginBottom:120,marginLeft:10}}
  width={368}
  height={102}
  viewBox="0 0 368 102"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M150.862 50.2647C150.862 55.9338 146.191 60.5295 140.431 60.5295C134.67 60.5295 130 55.9338 130 50.2647C130 44.5957 134.67 40 140.431 40C146.191 40 150.862 44.5957 150.862 50.2647Z"
    fill="#02B897"
  />
  <G filter="url(#filter0_d_566_4132)">
    <Path
      d="M150.862 50.2647C150.862 55.9338 146.191 60.5295 140.431 60.5295C134.67 60.5295 130 55.9338 130 50.2647C130 44.5957 134.67 40 140.431 40C146.191 40 150.862 44.5957 150.862 50.2647Z"
      fill="url(#paint0_linear_566_4132)"
    />
  </G>
  <G filter="url(#filter1_d_566_4132)">
    <Path
      d="M167.029 43.2825V46.0277H163.01V57.8406H160.076V46.0277H156.078V43.2825H167.029Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter2_d_566_4132)">
    <Path
      d="M169.266 49.2306C169.522 48.5651 169.94 48.066 170.521 47.7333C171.116 47.4005 171.776 47.2341 172.498 47.2341V50.2289C171.662 50.1319 170.911 50.2982 170.245 50.7281C169.593 51.1578 169.266 51.8719 169.266 52.8702V57.8408H166.523V47.4421H169.266V49.2306Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter3_d_566_4132)">
    <Path
      d="M180.457 47.4419H183.2V57.8406H180.457V56.6759C179.79 57.6464 178.734 58.1317 177.288 58.1317C176.126 58.1317 175.162 57.7504 174.396 56.9878C173.645 56.2253 173.27 55.1716 173.27 53.8266V47.4419H176.013V53.4939C176.013 54.1872 176.204 54.721 176.587 55.0953C176.969 55.4558 177.48 55.6361 178.118 55.6361C178.826 55.6361 179.394 55.4211 179.819 54.9913C180.244 54.5615 180.457 53.9168 180.457 53.0571V47.4419Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter4_d_566_4132)">
    <Path
      d="M187.367 53.7435C187.735 55.0468 188.735 55.6985 190.365 55.6985C191.414 55.6985 192.208 55.3518 192.746 54.6586L194.958 55.9064C193.909 57.39 192.364 58.1317 190.322 58.1317C188.565 58.1317 187.154 57.6118 186.091 56.572C185.028 55.5321 184.496 54.2219 184.496 52.6413C184.496 51.0745 185.021 49.7713 186.07 48.7314C187.119 47.6776 188.465 47.1508 190.11 47.1508C191.669 47.1508 192.952 47.6776 193.958 48.7314C194.979 49.7851 195.489 51.0884 195.489 52.6413C195.489 52.9879 195.454 53.3553 195.383 53.7435H187.367ZM187.324 51.6638H192.746C192.59 50.9567 192.264 50.4298 191.768 50.0832C191.286 49.7365 190.733 49.5632 190.11 49.5632C189.373 49.5632 188.763 49.7504 188.281 50.1248C187.799 50.4853 187.48 50.9982 187.324 51.6638Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter5_d_566_4132)">
    <Path
      d="M201.531 58.1317C200.057 58.1317 198.816 57.8128 197.81 57.1751C196.804 56.5234 196.095 55.643 195.684 54.5339L198.193 53.0988C198.774 54.5824 199.915 55.3241 201.616 55.3241C202.438 55.3241 203.041 55.1786 203.424 54.8874C203.806 54.5962 203.998 54.2288 203.998 53.7851C203.998 53.2721 203.764 52.877 203.296 52.5996C202.828 52.3085 201.992 51.9966 200.787 51.6638C200.121 51.4697 199.554 51.2756 199.086 51.0815C198.632 50.8874 198.172 50.6309 197.704 50.312C197.25 49.9792 196.903 49.5632 196.662 49.0641C196.421 48.565 196.3 47.9826 196.3 47.3171C196.3 46 196.775 44.9532 197.725 44.1767C198.689 43.3864 199.844 42.9913 201.191 42.9913C202.396 42.9913 203.452 43.2825 204.359 43.8648C205.281 44.4333 205.997 45.2305 206.507 46.2565L204.04 47.6499C203.445 46.402 202.495 45.7781 201.191 45.7781C200.581 45.7781 200.099 45.9168 199.745 46.1941C199.405 46.4576 199.235 46.8042 199.235 47.234C199.235 47.6915 199.426 48.0659 199.809 48.357C200.206 48.6343 200.957 48.9393 202.063 49.2721C202.516 49.4107 202.857 49.5217 203.083 49.6049C203.324 49.6742 203.643 49.7921 204.04 49.9584C204.451 50.1109 204.763 50.2565 204.976 50.3952C205.203 50.5338 205.458 50.721 205.741 50.9567C206.025 51.1924 206.238 51.435 206.379 51.6846C206.535 51.9341 206.663 52.2392 206.762 52.5996C206.875 52.9463 206.932 53.3276 206.932 53.7436C206.932 55.0884 206.429 56.156 205.422 56.9463C204.43 57.7366 203.133 58.1317 201.531 58.1317Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter6_d_566_4132)">
    <Path
      d="M213.966 47.1507C215.128 47.1507 216.085 47.532 216.836 48.2946C217.602 49.0572 217.985 50.1109 217.985 51.4558V57.8406H215.241V51.7885C215.241 51.0953 215.05 50.5685 214.668 50.2079C214.284 49.8336 213.774 49.6464 213.136 49.6464C212.428 49.6464 211.861 49.8613 211.435 50.2911C211.01 50.721 210.798 51.3657 210.798 52.2253V57.8406H208.055V43.2825H210.798V48.6065C211.464 47.636 212.52 47.1507 213.966 47.1507Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter7_d_566_4132)">
    <Path
      d="M228.72 56.5511C227.629 57.6049 226.296 58.1317 224.723 58.1317C223.15 58.1317 221.817 57.6049 220.725 56.5511C219.648 55.4836 219.109 54.1802 219.109 52.6413C219.109 51.1023 219.648 49.8059 220.725 48.7521C221.817 47.6845 223.15 47.1508 224.723 47.1508C226.296 47.1508 227.629 47.6845 228.72 48.7521C229.812 49.8059 230.358 51.1023 230.358 52.6413C230.358 54.1802 229.812 55.4836 228.72 56.5511ZM222.66 54.7002C223.213 55.2409 223.901 55.5113 224.723 55.5113C225.545 55.5113 226.233 55.2409 226.786 54.7002C227.338 54.1594 227.615 53.4731 227.615 52.6413C227.615 51.8093 227.338 51.123 226.786 50.5823C226.233 50.0416 225.545 49.7713 224.723 49.7713C223.901 49.7713 223.213 50.0416 222.66 50.5823C222.122 51.123 221.853 51.8093 221.853 52.6413C221.853 53.4731 222.122 54.1594 222.66 54.7002Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter8_d_566_4132)">
    <Path
      d="M237.809 47.1508C239.241 47.1508 240.46 47.6845 241.467 48.7521C242.487 49.8059 242.998 51.1022 242.998 52.6413C242.998 54.1802 242.487 55.4836 241.467 56.5511C240.46 57.6049 239.241 58.1317 237.809 58.1317C236.321 58.1317 235.173 57.6257 234.364 56.6136V62.0001H231.621V47.4419H234.364V48.669C235.173 47.6568 236.321 47.1508 237.809 47.1508ZM235.194 54.7626C235.746 55.3033 236.448 55.5737 237.299 55.5737C238.149 55.5737 238.851 55.3033 239.404 54.7626C239.971 54.208 240.254 53.5009 240.254 52.6413C240.254 51.7816 239.971 51.0815 239.404 50.5407C238.851 49.9861 238.149 49.7088 237.299 49.7088C236.448 49.7088 235.746 49.9861 235.194 50.5407C234.641 51.0815 234.364 51.7816 234.364 52.6413C234.364 53.5009 234.641 54.208 235.194 54.7626Z"
      fill="white"
    />
  </G>
  <Path
    d="M112.427 75.307C111.863 75.857 111.181 76.132 110.381 76.132C109.567 76.132 108.882 75.857 108.324 75.307C107.767 74.7497 107.488 74.064 107.488 73.25C107.488 72.436 107.767 71.754 108.324 71.204C108.882 70.6467 109.567 70.368 110.381 70.368C111.188 70.368 111.87 70.6467 112.427 71.204C112.992 71.754 113.274 72.436 113.274 73.25C113.274 74.0567 112.992 74.7423 112.427 75.307ZM108.841 74.801C109.259 75.219 109.773 75.428 110.381 75.428C110.99 75.428 111.503 75.219 111.921 74.801C112.339 74.3683 112.548 73.8513 112.548 73.25C112.548 72.6413 112.339 72.128 111.921 71.71C111.503 71.2847 110.99 71.072 110.381 71.072C109.773 71.072 109.259 71.2847 108.841 71.71C108.423 72.128 108.214 72.6413 108.214 73.25C108.214 73.8513 108.423 74.3683 108.841 74.801ZM118.383 72.898V70.5H119.109V76H118.383V73.602H115.215V76H114.489V70.5H115.215V72.898H118.383ZM121.217 70.5H125.155V76H124.429V71.204H121.943V73.657C121.943 74.5737 121.767 75.2043 121.415 75.549C121.07 75.8937 120.593 76.044 119.985 76V75.318C120.41 75.362 120.722 75.2593 120.92 75.01C121.118 74.7607 121.217 74.3097 121.217 73.657V70.5ZM131.422 71.578V70.5H132.148V76H131.422V74.922C130.916 75.7287 130.176 76.132 129.2 76.132C128.416 76.132 127.745 75.8533 127.187 75.296C126.637 74.7387 126.362 74.0567 126.362 73.25C126.362 72.4433 126.637 71.7613 127.187 71.204C127.745 70.6467 128.416 70.368 129.2 70.368C130.176 70.368 130.916 70.7713 131.422 71.578ZM127.715 74.801C128.133 75.219 128.647 75.428 129.255 75.428C129.864 75.428 130.377 75.219 130.795 74.801C131.213 74.3683 131.422 73.8513 131.422 73.25C131.422 72.6413 131.213 72.128 130.795 71.71C130.377 71.2847 129.864 71.072 129.255 71.072C128.647 71.072 128.133 71.2847 127.715 71.71C127.297 72.128 127.088 72.6413 127.088 73.25C127.088 73.8513 127.297 74.3683 127.715 74.801ZM137.426 69.62H134.566V68.982H137.426V69.62ZM134.412 74.735L137.69 70.5H138.306V76H137.58V71.765L134.302 76H133.686V70.5H134.412V74.735ZM143.735 72.898V70.5H144.461V76H143.735V73.602H140.567V76H139.841V70.5H140.567V72.898H143.735ZM151.694 70.368C152.479 70.368 153.146 70.6467 153.696 71.204C154.253 71.7613 154.532 72.4433 154.532 73.25C154.532 74.0567 154.253 74.7387 153.696 75.296C153.146 75.8533 152.479 76.132 151.694 76.132C150.719 76.132 149.978 75.7287 149.472 74.922V78.2H148.746V70.5H149.472V71.578C149.978 70.7713 150.719 70.368 151.694 70.368ZM150.099 74.801C150.517 75.219 151.03 75.428 151.639 75.428C152.248 75.428 152.761 75.219 153.179 74.801C153.597 74.3683 153.806 73.8513 153.806 73.25C153.806 72.6413 153.597 72.128 153.179 71.71C152.761 71.2847 152.248 71.072 151.639 71.072C151.03 71.072 150.517 71.2847 150.099 71.71C149.681 72.128 149.472 72.6413 149.472 73.25C149.472 73.8513 149.681 74.3683 150.099 74.801ZM158.28 70.368C159.102 70.368 159.758 70.6577 160.249 71.237C160.755 71.809 161.008 72.4873 161.008 73.272C161.008 73.3087 161.001 73.4223 160.986 73.613H156.157C156.231 74.163 156.465 74.603 156.861 74.933C157.257 75.263 157.752 75.428 158.346 75.428C159.182 75.428 159.773 75.1163 160.117 74.493L160.755 74.867C160.513 75.263 160.18 75.5747 159.754 75.802C159.336 76.022 158.863 76.132 158.335 76.132C157.47 76.132 156.766 75.8607 156.223 75.318C155.681 74.7753 155.409 74.086 155.409 73.25C155.409 72.4213 155.677 71.7357 156.212 71.193C156.748 70.643 157.437 70.368 158.28 70.368ZM158.28 71.072C157.708 71.072 157.228 71.2407 156.839 71.578C156.458 71.9153 156.231 72.359 156.157 72.909H160.26C160.18 72.3223 159.956 71.8713 159.589 71.556C159.208 71.2333 158.772 71.072 158.28 71.072ZM168.807 75.296V70.5H169.533V76H162.163V70.5H162.889V75.296H165.485V70.5H166.211V75.296H168.807ZM173.609 70.368C174.431 70.368 175.087 70.6577 175.578 71.237C176.084 71.809 176.337 72.4873 176.337 73.272C176.337 73.3087 176.33 73.4223 176.315 73.613H171.486C171.56 74.163 171.794 74.603 172.19 74.933C172.586 75.263 173.081 75.428 173.675 75.428C174.511 75.428 175.102 75.1163 175.446 74.493L176.084 74.867C175.842 75.263 175.509 75.5747 175.083 75.802C174.665 76.022 174.192 76.132 173.664 76.132C172.799 76.132 172.095 75.8607 171.552 75.318C171.01 74.7753 170.738 74.086 170.738 73.25C170.738 72.4213 171.006 71.7357 171.541 71.193C172.077 70.643 172.766 70.368 173.609 70.368ZM173.609 71.072C173.037 71.072 172.557 71.2407 172.168 71.578C171.787 71.9153 171.56 72.359 171.486 72.909H175.589C175.509 72.3223 175.285 71.8713 174.918 71.556C174.537 71.2333 174.101 71.072 173.609 71.072ZM181.386 72.898V70.5H182.112V76H181.386V73.602H178.218V76H177.492V70.5H178.218V72.898H181.386ZM184.373 74.735L187.651 70.5H188.267V76H187.541V71.765L184.263 76H183.647V70.5H184.373V74.735ZM191.53 70.5H193.763V76H193.037V73.888H192.091L190.397 76H189.473L191.211 73.866C190.763 73.8 190.397 73.6167 190.111 73.316C189.832 73.008 189.693 72.6377 189.693 72.205C189.693 71.7137 189.869 71.3067 190.221 70.984C190.587 70.6613 191.024 70.5 191.53 70.5ZM191.53 73.206H193.037V71.204H191.53C191.214 71.204 190.95 71.2993 190.738 71.49C190.525 71.6733 190.419 71.9117 190.419 72.205C190.419 72.4983 190.525 72.7403 190.738 72.931C190.95 73.1143 191.214 73.206 191.53 73.206ZM202.673 70.5V75.296H203.443V77.474H202.717V76H198.229V77.474H197.503V75.296H198.174C198.548 74.7973 198.735 74.1043 198.735 73.217V70.5H202.673ZM199.054 75.296H201.947V71.204H199.461V73.217C199.461 74.0677 199.325 74.7607 199.054 75.296ZM205.113 70.5H209.051V76H208.325V71.204H205.839V73.657C205.839 74.5737 205.663 75.2043 205.311 75.549C204.966 75.8937 204.49 76.044 203.881 76V75.318C204.306 75.362 204.618 75.2593 204.816 75.01C205.014 74.7607 205.113 74.3097 205.113 73.657V70.5ZM212.316 70.5H214.549V76H213.823V73.888H212.877L211.183 76H210.259L211.997 73.866C211.55 73.8 211.183 73.6167 210.897 73.316C210.618 73.008 210.479 72.6377 210.479 72.205C210.479 71.7137 210.655 71.3067 211.007 70.984C211.374 70.6613 211.81 70.5 212.316 70.5ZM212.316 73.206H213.823V71.204H212.316C212.001 71.204 211.737 71.2993 211.524 71.49C211.311 71.6733 211.205 71.9117 211.205 72.205C211.205 72.4983 211.311 72.7403 211.524 72.931C211.737 73.1143 212.001 73.206 212.316 73.206ZM221.281 76.132C220.496 76.132 219.836 75.8717 219.301 75.351C218.773 74.823 218.509 74.141 218.509 73.305C218.509 72.3663 218.648 71.6477 218.927 71.149C219.206 70.643 219.77 70.1847 220.621 69.774C220.892 69.6493 221.105 69.554 221.259 69.488C221.516 69.3853 221.717 69.2973 221.864 69.224C222.502 68.9307 222.825 68.5677 222.832 68.135L223.404 68.465C223.367 68.6483 223.309 68.8133 223.228 68.96C223.133 69.1213 223.037 69.2497 222.942 69.345C222.854 69.4403 222.715 69.543 222.524 69.653C222.399 69.7263 222.249 69.807 222.073 69.895L221.523 70.126L221.006 70.346C220.5 70.566 220.122 70.797 219.873 71.039C219.631 71.2737 219.459 71.5817 219.356 71.963C219.591 71.6477 219.899 71.4093 220.28 71.248C220.661 71.0793 221.046 70.995 221.435 70.995C222.168 70.995 222.773 71.237 223.25 71.721C223.734 72.1977 223.976 72.81 223.976 73.558C223.976 74.2987 223.719 74.9147 223.206 75.406C222.7 75.89 222.058 76.132 221.281 76.132ZM219.851 74.867C220.232 75.2263 220.709 75.406 221.281 75.406C221.853 75.406 222.322 75.2337 222.689 74.889C223.063 74.537 223.25 74.0933 223.25 73.558C223.25 73.0153 223.074 72.5717 222.722 72.227C222.377 71.875 221.915 71.699 221.336 71.699C220.815 71.699 220.342 71.864 219.917 72.194C219.492 72.5093 219.279 72.942 219.279 73.492C219.279 74.0493 219.47 74.5077 219.851 74.867ZM225.806 74.735L229.084 70.5H229.7V76H228.974V71.765L225.696 76H225.08V70.5H225.806V74.735ZM234.073 73.173C234.711 73.415 235.03 73.855 235.03 74.493C235.03 74.955 234.851 75.3437 234.491 75.659C234.147 75.9743 233.641 76.132 232.973 76.132C231.859 76.132 231.133 75.692 230.795 74.812L231.411 74.449C231.646 75.1017 232.167 75.428 232.973 75.428C233.391 75.428 233.718 75.34 233.952 75.164C234.187 74.9807 234.304 74.7423 234.304 74.449C234.304 74.185 234.209 73.976 234.018 73.822C233.828 73.6607 233.571 73.58 233.248 73.58H232.445V72.876H233.028C233.344 72.876 233.589 72.799 233.765 72.645C233.949 72.4837 234.04 72.2637 234.04 71.985C234.04 71.721 233.93 71.5047 233.71 71.336C233.498 71.16 233.215 71.072 232.863 71.072C232.181 71.072 231.723 71.347 231.488 71.897L230.883 71.545C231.25 70.7603 231.91 70.368 232.863 70.368C233.45 70.368 233.912 70.522 234.249 70.83C234.594 71.1307 234.766 71.501 234.766 71.941C234.766 72.5057 234.535 72.9163 234.073 73.173ZM240.028 72.898V70.5H240.754V76H240.028V73.602H236.86V76H236.134V70.5H236.86V72.898H240.028ZM244.83 70.368C245.651 70.368 246.308 70.6577 246.799 71.237C247.305 71.809 247.558 72.4873 247.558 73.272C247.558 73.3087 247.551 73.4223 247.536 73.613H242.707C242.78 74.163 243.015 74.603 243.411 74.933C243.807 75.263 244.302 75.428 244.896 75.428C245.732 75.428 246.322 75.1163 246.667 74.493L247.305 74.867C247.063 75.263 246.729 75.5747 246.304 75.802C245.886 76.022 245.413 76.132 244.885 76.132C244.02 76.132 243.316 75.8607 242.773 75.318C242.23 74.7753 241.959 74.086 241.959 73.25C241.959 72.4213 242.227 71.7357 242.762 71.193C243.297 70.643 243.987 70.368 244.83 70.368ZM244.83 71.072C244.258 71.072 243.778 71.2407 243.389 71.578C243.008 71.9153 242.78 72.359 242.707 72.909H246.81C246.729 72.3223 246.506 71.8713 246.139 71.556C245.758 71.2333 245.321 71.072 244.83 71.072ZM251.276 76.132C250.447 76.132 249.758 75.857 249.208 75.307C248.658 74.7423 248.383 74.0567 248.383 73.25C248.383 72.436 248.658 71.754 249.208 71.204C249.758 70.6467 250.447 70.368 251.276 70.368C251.819 70.368 252.306 70.5 252.739 70.764C253.172 71.0207 253.487 71.369 253.685 71.809L253.091 72.15C252.944 71.82 252.706 71.5597 252.376 71.369C252.053 71.171 251.687 71.072 251.276 71.072C250.667 71.072 250.154 71.2847 249.736 71.71C249.318 72.128 249.109 72.6413 249.109 73.25C249.109 73.8513 249.318 74.3683 249.736 74.801C250.154 75.219 250.667 75.428 251.276 75.428C251.679 75.428 252.042 75.3327 252.365 75.142C252.695 74.9513 252.952 74.6873 253.135 74.35L253.74 74.702C253.513 75.142 253.179 75.4903 252.739 75.747C252.299 76.0037 251.811 76.132 251.276 76.132ZM259.458 71.578V70.5H260.184V76H259.458V74.922C258.952 75.7287 258.212 76.132 257.236 76.132C256.452 76.132 255.781 75.8533 255.223 75.296C254.673 74.7387 254.398 74.0567 254.398 73.25C254.398 72.4433 254.673 71.7613 255.223 71.204C255.781 70.6467 256.452 70.368 257.236 70.368C258.212 70.368 258.952 70.7713 259.458 71.578ZM255.751 74.801C256.169 75.219 256.683 75.428 257.291 75.428C257.9 75.428 258.413 75.219 258.831 74.801C259.249 74.3683 259.458 73.8513 259.458 73.25C259.458 72.6413 259.249 72.128 258.831 71.71C258.413 71.2847 257.9 71.072 257.291 71.072C256.683 71.072 256.169 71.2847 255.751 71.71C255.333 72.128 255.124 72.6413 255.124 73.25C255.124 73.8513 255.333 74.3683 255.751 74.801Z"
    fill="#BBBBBB"
  />
  <Defs>
    <LinearGradient
      id="paint0_linear_566_4132"
      x1={130}
      y1={60.5295}
      x2={152.868}
      y2={41.6344}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#12D1AF" />
      <Stop offset={1} stopColor="#1BDAD9" />
    </LinearGradient>
  </Defs>
</Svg>
  )
}

export default True