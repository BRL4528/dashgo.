import {
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ElementType } from 'react';

import { ActiveLink } from '../ActiveLink';

interface PropsNavLink extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: PropsNavLink) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
