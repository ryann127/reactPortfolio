

import React from 'react';
import GitHub from '../Images/github.png';
import LinkedIn from '../Images/linkedin.png';

function Footer() {
    return(
      <div>
			<footer className="px-2 py-3">
				<a
					href="https://github.com/ryann127"
					target="_blank"
					rel="noreferrer noopener"
					className="hover:opacity-75"
				>
					<img className="h-10 px-2" alt="GitHub logo" src={GitHub} />
				</a>
				<a
					href="https://www.linkedin.com/feed/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<img
						className="h-10 px-2"
						alt="LinkedIn logo"
						src={LinkedIn}
					/>
				</a>
			</footer>
		</div>

    )}

export default Footer