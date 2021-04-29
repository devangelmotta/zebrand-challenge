import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import Img from 'components/Img'
import { useQuery } from '@apollo/client';
import { infoCurrentUser  } from 'GraphQl/queries';
import 'bootstrap/dist/css/bootstrap.css';

export const UserInfo = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const { data } = useQuery(
    infoCurrentUser
  )
  return (
    <div>
        <Button id="Popover1" type="button" className="bg-transparent border-0 center">
            <Img src={data?.viewer?.avatarUrl}
                borderRadius="60px"
                width="60px"
                height="60px"
            />
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
            <PopoverHeader>{data?.viewer?.name || data?.viewer?.login}</PopoverHeader>
            <PopoverBody>{data?.viewer?.bio ? data?.viewer?.bio : 'Bio no available'}</PopoverBody>
        </Popover>
    </div>
  );
}

