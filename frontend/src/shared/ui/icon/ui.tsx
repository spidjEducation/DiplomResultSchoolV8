import { SVGProps } from 'react';
import { Icons } from 'shared/types';
import Back from './svg/arrow-back.svg?react';
import Cross from './svg/cross.svg?react';
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
		case Icons.cross:
			return <Cross className={className} width={size} height={size} {...rest} />;
		case Icons.back:
			return <Back className={className} width={size} height={size} {...rest} />;
		default:
			return null;
	}
};
