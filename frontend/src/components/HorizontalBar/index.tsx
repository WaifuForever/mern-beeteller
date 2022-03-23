import React from 'react';
import './styles.scss';

const HorizontalBar = () => {
    return (
        <div className="bar-container">
            <div className="logo-container">
                <div className="beeteller">
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="0.141 0.001 80.083 14"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0.141 0.001 80.083 14"
                        height="14"
                        width="81"
                        data-type="color"
                        role="presentation"
                        aria-hidden="true"
                        aria-labelledby="svgcid-4vbwje-5p6ddh">
                        <title id="svgcid-4vbwje-5p6ddh"></title>
                        <g>
                            <path
                                fill="#0F0F0F"
                                d="M1.702 5.158c.123-.118.22-.207.314-.293a4.825 4.825 0 0 1 2.79-1.312c1.77-.207 3.271.329 4.485 1.621.737.785 1.197 1.71 1.34 2.77.232 1.735-.214 3.263-1.483 4.527-.763.762-1.666 1.27-2.747 1.438-1.693.262-3.22-.108-4.553-1.186-.107-.087-.208-.185-.314-.275-.392-.322-.612-.759-.82-1.2a6.228 6.228 0 0 1-.556-1.821 1.632 1.632 0 0 1-.016-.217V.312C.142.27.14.226.142.184.158.054.21.002.342.002.729 0 1.113 0 1.496.002c.136 0 .184.055.2.185.007.055.004.109.004.163v4.585c.003.064.003.127.003.223zm3.654 7.348c.346.003.708-.035 1.061-.14 1.524-.45 2.628-1.848 2.696-3.42.051-1.245-.395-2.292-1.33-3.115-.861-.759-1.89-1.033-3.026-.845-1.155.191-2.068.772-2.657 1.787-.511.88-.592 1.83-.405 2.813.279 1.465 1.7 2.955 3.66 2.92z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M14.2 8.993c.026.587.14 1.13.405 1.634.488.931 1.22 1.601 2.271 1.837 1.317.294 2.505-.013 3.531-.88.275-.233.482-.527.683-.823.087-.131.171-.265.256-.396.087-.134.139-.15.288-.077.11.055.213.112.323.17.204.108.411.213.615.322.146.08.168.134.1.274-.738 1.47-1.883 2.45-3.53 2.804a6.103 6.103 0 0 1-3.023-.111 4.455 4.455 0 0 1-2.204-1.449c-.705-.842-1.158-1.793-1.278-2.88-.175-1.596.262-3.012 1.324-4.234.873-1.005 1.987-1.544 3.32-1.656.883-.077 1.75.01 2.566.35 1.56.655 2.553 1.807 2.997 3.418.126.46.184.931.19 1.41 0 .048.004.096-.002.144-.01.082-.062.13-.146.137-.062.003-.123.003-.185.003h-8.278c-.064.003-.132.003-.223.003zm7.113-1.372c-.162-.561-.375-1.085-.79-1.496-1.032-1.027-2.284-1.35-3.692-1.008-1.09.265-1.828.973-2.259 1.99-.071.163-.145.33-.181.514h6.922z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M48.956 8.993H44.8c-.203 0-.21-.051-.187.204.074.804.34 1.535.877 2.157.524.603 1.168 1.024 1.974 1.152 1.252.2 2.375-.096 3.34-.916.323-.277.563-.632.796-.986.055-.086.106-.175.165-.258.07-.105.132-.128.246-.067.33.169.66.341.983.517.13.07.143.127.075.268-.152.31-.33.603-.537.88-.864 1.158-2.023 1.819-3.466 1.997-.8.1-1.596.061-2.379-.143a4.478 4.478 0 0 1-2.281-1.391c-.758-.858-1.243-1.841-1.37-2.977-.177-1.592.256-3.012 1.315-4.237.877-1.011 1.993-1.554 3.336-1.665.884-.074 1.75.01 2.566.354 1.554.654 2.544 1.803 2.987 3.404.13.466.188.945.191 1.426 0 .042.004.083-.003.128-.01.09-.058.143-.152.15-.055.003-.11.003-.165.003h-4.155zm2.75-1.369c-.456-1.904-2.158-2.654-3.569-2.632-1.624.029-2.896.999-3.34 2.632h6.91z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M26.361 8.993c.026.587.14 1.13.405 1.637.488.931 1.22 1.601 2.272 1.837 1.317.294 2.504-.012 3.53-.88.275-.233.482-.527.683-.823.087-.131.172-.265.256-.396.087-.134.139-.15.288-.076.11.054.213.111.323.169.204.108.411.213.615.322.146.08.168.134.1.274-.737 1.471-1.883 2.45-3.53 2.805a6.128 6.128 0 0 1-3.039-.115 4.44 4.44 0 0 1-2.188-1.445c-.705-.843-1.158-1.793-1.278-2.881-.175-1.596.262-3.012 1.324-4.234.873-1.005 1.987-1.544 3.32-1.656.884-.077 1.75.01 2.566.351 1.56.654 2.554 1.806 2.997 3.417.126.46.184.932.19 1.41 0 .048.004.096-.002.144-.01.083-.062.13-.146.137-.061.003-.123.003-.184.003H26.36zm.191-1.372h6.91c-.399-1.755-1.933-2.58-3.373-2.626-1.634-.054-3.029.843-3.537 2.626z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M68.772 8.993h-4.156c-.204 0-.21-.051-.187.204.074.804.34 1.535.877 2.157.527.61 1.178 1.03 1.99 1.158 1.236.195 2.35-.102 3.307-.906.285-.24.499-.542.709-.849.09-.134.175-.274.265-.408.071-.105.133-.128.246-.067.33.169.66.341.984.517.13.07.142.127.074.268-.152.31-.33.603-.537.88-.864 1.159-2.022 1.819-3.466 1.998a6.313 6.313 0 0 1-2.378-.144 4.478 4.478 0 0 1-2.282-1.391c-.757-.858-1.242-1.84-1.369-2.977-.178-1.592.256-3.011 1.314-4.237.877-1.011 1.994-1.553 3.337-1.665.883-.073 1.75.01 2.566.354 1.553.654 2.543 1.8 2.987 3.404.13.466.188.945.19 1.426 0 .042.004.083-.002.128-.01.09-.059.144-.153.15-.054.003-.11.003-.165.003-1.378-.003-2.763-.003-4.151-.003zm-4.165-1.372h6.909c-.395-1.748-1.926-2.581-3.37-2.626-1.627-.054-3.025.833-3.54 2.626z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M36.785 5.63V.505c0-.303.016-.32.317-.32h.936c.3 0 .313.013.313.32V4.71c0 .178-.019.166.166.166h1.887c.271 0 .29.019.29.287 0 .284.004.564 0 .848-.003.195-.038.23-.24.23h-1.921c-.185 0-.169-.016-.169.163v3.736c0 .312.004.625.078.931.123.51.388.932.793 1.267.285.233.634.265.987.246.24-.013.466-.083.683-.189.026-.012.055-.028.08-.038.136-.054.201-.029.256.109.062.15.114.303.172.456.065.169.133.335.194.504.039.112.016.175-.094.217-.608.22-1.23.392-1.89.338-.802-.064-1.45-.421-1.958-1.034-.602-.72-.877-1.557-.88-2.485-.003-1.605-.003-3.22 0-4.83z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M55.438 7.108V.555c0-.303.02-.323.334-.323h.951c.243 0 .282.042.285.288v13.119c0 .338-.006.344-.346.344h-.952c-.246 0-.268-.022-.268-.27V7.735c-.004-.207-.004-.418-.004-.628z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M60.832 7.114v6.553c0 .31-.01.32-.313.32h-1.007c-.204 0-.243-.042-.246-.246V.583c0-.328.02-.35.346-.35h.936c.048 0 .097.003.145.009.084.01.133.06.14.144.003.06.003.12.003.181-.004 2.18-.004 4.365-.004 6.547z"
                                data-color="1"></path>
                            <path
                                fill="#0F0F0F"
                                d="M74.965 10.99V8.41c0-.39.097-.763.22-1.13.288-.852.673-1.656 1.32-2.304.615-.612 1.34-1.056 2.21-1.234.334-.067.654.006.968.115.15.05.295.118.43.197.12.07.14.138.072.256-.2.328-.411.654-.615.982-.052.083-.126.112-.22.08-.47-.156-.883-.029-1.246.268-.647.53-1.14 1.17-1.366 1.981-.08.29-.103.594-.126.894a27.53 27.53 0 0 0-.071 2.003c-.003 1.053 0 2.106 0 3.159 0 .28-.013.293-.301.293h-1.026c-.217 0-.255-.041-.255-.252.006-.909.006-1.818.006-2.728z"
                                data-color="1"></path>
                        </g>
                    </svg>
                </div>
                <div className="delimiter"></div>

                <div className="activity">
                    <span>COTAÇÕES</span>
                    <svg
                        width="14"
                        height="21"
                        viewBox="0 0 14 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13 10.5L10 19.5L4 1.5L1 10.5"
                            stroke="#BDBDBD"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <span className='lang r-mrg'>EN</span>
        </div>
    );
};

export default HorizontalBar;
