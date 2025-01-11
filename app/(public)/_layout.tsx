import { Stack } from 'expo-router'

const PublicLayout = () => {
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
}

export default PublicLayout;