import { SVGProps } from 'react';
import { Icons } from 'shared/types';
import Exit from './svg/exit.svg?react';
import Logo from './svg/logo.svg?react';

interface IconProps extends SVGProps<SVGSVGElement> {
	name?: Icons;
	size?: number;
}

export const Icon = ({ name, className, size = 36, ...rest }: IconProps) => {
	switch (name) {
		case Icons.logo:
			return <Logo className={className} {...rest} />;
		case Icons.exit:
			return <Exit className={className} width={size} height={size} {...rest} />;
		default:
			return null;
	}
};
