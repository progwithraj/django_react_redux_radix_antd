import React from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export const UserTwitterCard = ({ user }) => {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card shadow="none" className=" max-w-[300px] border-none bg-transparent">
            <CardHeader className="justify-between">
                <div className="flex gap-3">
                    <Avatar isBordered radius="full" size="md" src={user?.avatar} />
                    <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small font-semibold leading-none light:text-white text-redGlow">{user?.username}</h4>
                        <h5 className="text-small tracking-tight light:text-white text-neon">@{user?.userId}</h5>
                    </div>
                </div>
                {console.log('isFollowed', isFollowed)}
                <Button
                    className={isFollowed ? " text-foreground border-default-200" : "text-background border-red-400"}
                    color={isFollowed ? "danger" : "primary netflix:warning"}
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "solid" : "bordered"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>
            <CardBody className="px-3 py-0">
                <p className="text-small pl-px text-redGlow">
                    {user?.role || 'Full-stack developer, @getnextui lover she/her'}
                    <span aria-label="confetti" role="img">
                        🎉
                    </span>
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-redGlow text-small">4</p>
                    <p className=" text-redGlow text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-redGlow text-small">97.1K</p>
                    <p className="text-redGlow text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    );
};
