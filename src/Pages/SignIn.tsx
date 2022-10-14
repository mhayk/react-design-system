import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    function handleSignIn(event: FormEvent) {
        event.preventDefault();

        setIsUserSignedIn(true);
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <header className='flex flex-col items-center'>
                <Logo />
                <Heading size='lg' className='mt-4'>
                    Ignite Lab
                </Heading>

                <Text size="lg" className='text-gray-400 mt-1'>
                    Sign in and start to use!
                </Text>
            </header>

            <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
                {isUserSignedIn && <Text>Login successfully !</Text>}

                <label htmlFor="email" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>E-mail address</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input id="email" placeholder='Type your e-mail' />
                    </TextInput.Root>
                </label>
                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Password</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="password" placeholder='*************' />
                    </TextInput.Root>
                </label>

                <label htmlFor='remember' className='flex items-center gap-2'>
                    <Checkbox id="remember" />
                    <Text size='sm' className='text-gray-200'>Remind me me per 30 days</Text>
                </label>

                <Button type="submit" className='mt-4'>Log in to your account</Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Forgot your password ?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Don’t have an account? Create an accout now!</a>
                </Text>
            </footer>
        </div>
    )
}