import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pages.module.css';


export const NotFound404 = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer}>
        <svg width="451" height="450" viewBox="0 0 451 450" fill="none" xmlns="http://www.w3.org/2000/svg" class="error-page__images error-page__images_type_not-found"><path fill-rule="evenodd" clip-rule="evenodd" d="M388.298 304H415.459L417.179 291H446V287H417.708L422.471 251H432V227H422.067C424.913 223.071 429.146 220.278 433.643 218.366C439.004 216.086 444.517 215.155 447.891 214.998L450.824 214.861L449.623 212.182C447.292 206.982 442.019 200.194 433.675 196.543C425.379 192.913 414.319 192.503 400.6 199.358C397.423 194.441 393.159 190.368 388.298 188.058V192.595C392.353 195.003 395.983 198.956 398.637 203.893C402.326 210.758 403.886 219.14 402.016 227H388.298V231H428V247H423H388.298V251H418.524L411.925 300.015H388.298V304ZM402.595 202.833C406.217 209.981 407.846 218.652 406.116 227H417.333C420.68 220.965 426.42 217.091 432.078 214.685C436.525 212.793 441.053 211.751 444.635 211.283C442.217 207.293 438.033 202.816 432.071 200.207C425.056 197.138 415.312 196.537 402.595 202.833Z" fill="#E3E6E9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30 230H73V234H34V255H37H73V259H41V268H73V272H37H28V298H73V302H24V292H2V288H24V268H37V259H30V230Z" fill="#E3E6E9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M70.9999 115H379.058V119H74.9999V135H70.9999V115ZM70.9999 207V304.244L52 319.022V335.143H56V320.978L72.6862 308H384.299L400.623 320H255.298V324H402V334.788H406V318.988L389 306.491V123.702H385V304H74.9999V207H70.9999ZM59.0716 338H399V342H59.0716V338ZM206.47 324H66.2981V320H208.127L214.131 326.004H248.298V330.004H212.474L206.47 324Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M47.2981 133H371.298V209H47.2981V133ZM51.2981 137V205H367.298V137H51.2981Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M330.97 170.5L318.595 182.874L321.424 185.703L333.798 173.328L346.172 185.703L349.001 182.874L336.626 170.5L349.001 158.126L346.172 155.297L333.798 167.672L321.424 155.297L318.595 158.126L330.97 170.5Z" fill="white"></path><path d="M73.8662 157.8H70.5382V181H73.8662V171.752C73.8662 168.296 75.2422 166.248 78.1542 166.248C81.3222 166.248 81.7062 168.584 81.7062 171.048V181H85.0342V170.152C85.0342 166.152 83.4342 163.464 79.2742 163.464C76.5862 163.464 74.8582 164.584 73.8662 166.28V157.8Z" fill="#FE1B1B"></path><path d="M89.8665 163.784H87.2425V166.312H89.8665V176.584C89.8665 180.136 90.6345 181 94.1225 181H96.5545V178.344H95.1465C93.4825 178.344 93.1945 177.896 93.1945 176.136V166.312H96.5865V163.784H93.1945V159.368H89.8665V163.784Z" fill="#FE1B1B"></path><path d="M100.491 163.784H97.8675V166.312H100.491V176.584C100.491 180.136 101.259 181 104.747 181H107.179V178.344H105.771C104.107 178.344 103.819 177.896 103.819 176.136V166.312H107.211V163.784H103.819V159.368H100.491V163.784Z" fill="#FE1B1B"></path><path d="M110.444 163.784V186.6H113.772V178.568C114.828 180.36 116.588 181.416 119.148 181.416C123.148 181.416 126.572 178.056 126.572 172.424C126.572 166.792 123.148 163.464 119.148 163.464C116.588 163.464 114.828 164.52 113.772 166.312V163.784H110.444ZM113.644 172.424C113.644 168.168 115.82 166.248 118.38 166.248C121.164 166.248 123.02 168.552 123.02 172.424C123.02 176.296 121.164 178.632 118.38 178.632C115.82 178.632 113.644 176.68 113.644 172.424Z" fill="#FE1B1B"></path><path d="M142.97 168.584C142.298 165.256 139.578 163.432 136.09 163.432C132.346 163.432 129.114 165.288 129.114 168.328C129.114 171.592 131.546 172.712 134.138 173.224L136.73 173.736C138.522 174.088 140.026 174.76 140.026 176.328C140.026 177.864 138.394 178.76 136.218 178.76C133.786 178.76 132.57 177.608 132.09 175.656H128.698C129.114 178.888 131.738 181.416 136.122 181.416C140.09 181.416 143.354 179.432 143.354 175.944C143.354 172.552 140.474 171.496 137.242 170.824L134.778 170.344C133.21 169.992 132.378 169.48 132.378 168.2C132.378 166.792 134.138 166.12 135.77 166.12C137.722 166.12 139.194 166.792 139.674 168.584H142.97Z" fill="#FE1B1B"></path><path d="M150.342 167.784V163.784H146.342V167.784H150.342ZM150.342 181V177H146.342V181H150.342Z" fill="#FE1B1B"></path><path d="M155.436 181L164.524 157.8H161.228L152.172 181H155.436Z" fill="#FE1B1B"></path><path d="M164.748 181L173.836 157.8H170.54L161.484 181H164.748Z" fill="#FE1B1B"></path><path d="M193.288 176.104C196.2 176.104 198.984 173.224 198.984 168.008C198.984 161 193.864 157.8 187.688 157.8C180.552 157.8 175.112 162.984 175.112 169.832C175.112 176.584 179.72 181.416 186.44 181.416C188.744 181.416 191.272 180.904 193.48 179.848L192.584 177.64C190.664 178.632 188.52 179.016 186.44 179.016C181.064 179.016 177.672 175.24 177.672 169.928C177.672 164.296 181.704 160.04 187.624 160.04C192.872 160.04 196.52 162.824 196.52 168.136C196.52 171.688 195.144 173.8 193.48 173.8C192.488 173.8 192.136 173.16 192.04 172.104C191.944 171.56 192.04 170.888 192.136 170.376L193.064 163.4H190.792C190.696 163.656 190.632 165.032 190.536 165.288C189.928 163.784 188.648 162.856 186.856 162.856C182.76 162.856 180.264 166.536 180.264 170.248C180.264 174.248 182.568 176.008 185.128 176.008C187.272 176.008 188.872 175.048 189.896 173.16C190.152 175.08 191.592 176.104 193.288 176.104ZM186.888 165.288C188.68 165.288 189.672 166.376 189.672 168.392C189.672 171.24 188.264 173.64 185.736 173.64C184.04 173.64 183.08 172.584 183.08 170.312C183.08 167.656 184.488 165.288 186.888 165.288Z" fill="#FE1B1B"></path><path d="M206.98 171.08C210.564 171.08 212.356 168.328 212.356 164.328C212.356 160.328 210.564 157.576 206.98 157.576C203.492 157.576 201.668 160.328 201.668 164.328C201.668 168.328 203.492 171.08 206.98 171.08ZM206.98 169.192C205.284 169.192 204.292 167.528 204.292 164.328C204.292 161.128 205.284 159.464 206.98 159.464C208.772 159.464 209.732 161.128 209.732 164.328C209.732 167.528 208.772 169.192 206.98 169.192ZM210.596 181L226.596 157.8H222.98L206.98 181H210.596ZM226.66 181.224C230.212 181.224 232.004 178.472 232.004 174.472C232.004 170.472 230.212 167.72 226.66 167.72C223.108 167.72 221.316 170.472 221.316 174.472C221.316 178.472 223.108 181.224 226.66 181.224ZM226.66 179.336C224.9 179.336 223.94 177.672 223.94 174.472C223.94 171.272 224.9 169.608 226.66 169.608C228.42 169.608 229.38 171.272 229.38 174.472C229.38 177.672 228.42 179.336 226.66 179.336Z" fill="#FE1B1B"></path><path d="M235.064 163.592L234.744 166.216H239.224L238.456 171.656H233.976L233.624 174.248H238.104L237.176 181H240.024L240.92 174.248H245.688L244.792 181H247.64L248.536 174.248H252.92L253.24 171.656H248.92L249.656 166.216H254.008L254.36 163.592H250.04L250.84 157.8H247.992L247.192 163.592H242.392L243.224 157.8H240.376L239.576 163.592H235.064ZM242.04 166.216H246.808L246.072 171.656H241.304L242.04 166.216Z" fill="#FE1B1B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M179.01 252.528L194.246 225.075L190.748 223.134L175.512 250.587L179.01 252.528ZM201.298 236V264H197.298V259H179.298V255H197.298V236H201.298ZM261.01 252.528L276.246 225.075L272.748 223.134L257.512 250.587L261.01 252.528ZM283.298 236V264H279.298V259H261.298V255H279.298V236H283.298ZM230.637 225.031C231.021 225.011 231.408 225 231.798 225C242.395 225 251.298 232.894 251.298 243H247.298C247.298 235.433 240.531 229 231.798 229C231.481 229 231.166 229.009 230.853 229.026C222.575 229.475 216.298 235.707 216.298 243H212.298C212.298 233.267 220.566 225.578 230.637 225.031ZM216.298 248C216.298 255.567 223.065 262 231.798 262C232.116 262 232.431 261.991 232.743 261.974C241.022 261.525 247.298 255.293 247.298 248H251.298C251.298 257.733 243.03 265.422 232.96 265.969C232.575 265.989 232.188 266 231.798 266C221.201 266 212.298 258.106 212.298 248H216.298Z" fill="#FE1B1B"></path></svg>
        <br />
        <Link to='/' className={styles.link}>Перейти на список ингредиентов</Link>
      </div>
    </div>
  );
}; 

export default NotFound404;

