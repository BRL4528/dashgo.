import React, { useState } from 'react';
import {
  Flex,
  Button,
  Stack,
  InputRightElement,
  InputGroup,
  Input as InputTemp,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignin: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };

  const handleClick = () => setShow(!show);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack size={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
          />

          <InputGroup size="md" align="center" m="auto">
            <Input
              name="password"
              type={show ? 'text' : 'password'}
              label="Senha"
              error={formState.errors.password}
              {...register('password')}
            />
            <InputRightElement align="center" m="auto" width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          size="lg"
          type="submit"
          mt="6"
          colorScheme="cyan"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
