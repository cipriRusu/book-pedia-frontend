import { StarFilledIcon } from "@radix-ui/react-icons"

function Footer() {
    return <footer className="fixed bottom-0 bg-secondary w-full mt-auto border">
        <div className="flex items-center mx-auto max-w-6xl px-4 py-5 gap-2">
            <StarFilledIcon />Website built for presentation purposes. It's work in progress, built with personal and free/public assets and has no commercial or production assets.
        </div>
    </footer>
}

export default Footer