'use client';

import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";
import { AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const UserItem = () => {
    const {user} = useUser(); // get current login user
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div role="button" className="
            flex items-center text-sm p-3 w-full hover:bg-primary/5">

                <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-5 w-5">
                                <AvatarImage src={user?.imageUrl}/>
                            </Avatar>
                            <span className="text-start font-medium line-clamp-1">
                                {user?.fullName}&apos;s Jotion
                            </span>
                </div>
            </div>

        </DropdownMenuTrigger>
    </DropdownMenu>;
}