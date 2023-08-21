import React from "react";
import { createStyles, rem, Button } from '@mantine/core';


export default function ButtonCreate() {

    return (
        <div>
            <Button

                        styles={(theme) => ({
                            root: {
                                backgroundColor: "orange",
                                '&:not([data-disabled])': theme.fn.hover({
                                    backgroundColor: '#ff8000',
                                }),
                            },
                                rightIcon: {
                                marginLeft: "0.1em",
                                        },
                                   })}
                              >
                                 Créer une nouvelle playlist
                    </Button>
        </div>
    )
}