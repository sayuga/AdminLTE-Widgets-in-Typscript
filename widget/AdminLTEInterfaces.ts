module AdminLTETools {

    export interface genericBoxElements {
        elementId: string,
        myBootstrap?: string,
        boxType?: string, //boxType: "box box-default" | "box box-default" | "box box-default" | "box box-default",
        bgImage?: string,
        bgColor?: string,
        isWidget?: boolean,
        isSolid?: boolean,
        headerContent?: string
        bodyContent?: string,
        footerContent?: string,
        customBoxContent?: string
        isCollapsed?: boolean
    }

    export interface headerElements {
        title?: string,
        tools?: toolElements,
        hasTools?: boolean,
        customBoxHeader?: string,
        userHeaderValues?: userHeaderElement,
        commentHeaderValues?: commentHeaderElement
    }

    export interface toolElements {
        hasCollapsible?: collapseElements,
        hasRemovable?: boolean,
        hasChatPane?: boolean,
        hasMarkRead?: boolean,
        hasBadge?: badgeElements,
        hasDropdown?: dropDownElements,
        hasPagination?: paginationElements,
        hasStatus?: boolean,
    }

    export interface badgeElements {
        badgeMessage?: string,
        badgeColor?: string,
    }

    export interface dropDownElements {
        dropDownList?: string,
    }

    export interface paginationElements {
        paginationList?: string,
    }
    export interface collapseElements {
        isCollapsed?: boolean,
    }

    export interface userHeaderElement {
        userName: string,
        userDesc?: string,
        userImage?: string
    }

    export interface commentHeaderElement {
        userName: string,
        userDesc?: string,
        userImage?: string
        userHref?: string
    }

    export interface bodyElements {
        customBoxBody?: string,
        commentVals?: commentPostElements,
        directChatVals?: directChatElements,
    }

    export interface directChatElements {
        chatMessages: directChatMsg[],
        chatContacts: directChatContact[]
    }

    export interface directChatMsg {
        msgName: string,
        timeStamp: string,
        chatImg: string,
        chatText: string,
        chatOnRight?: boolean
    }

    export interface directChatContact {
        contactImage: string,
        contactName: string,
        contactDate: string,
        contactText: string,
        hRef?: string
    }

    export interface commentPostElements {
        commentImg?: string,
        commentMsg?: string,
        commentStats?: string
        attachmentVals?: attachmentElements,
    }

    export interface attachmentElements {
        attachImg?: string,
        attachHeadHref?: string,
        attachHeadText?: string,
        attachBodyHref?: string
        attachBodytext?: string
    }

    export interface footerElements {
        customBoxFooter?: string,
        chatAction?: string,
        commentVals?: commentElements,
        linkHref?: string
    }

    export interface commentElements {
        commentAction?: string,
        commentList?: string,
        commentPostImg?: string,
    }

    export interface userStatElements {
        statName: string,
        statValue: string,
        statColor?: string
        hRef?: string,
        changeDirection?: "up" | "down" | "no-change",
        changePrcnt?: string,
        commentImage?: string,
        commentInsertDate?: string,
    }
    export interface statListElements {
        listValues: userStatElements[]
        isStacked?: boolean,
        isBlockStack?: boolean,
        isChangeList?: boolean,
        isCommentList?: boolean,
        isBlockWChange?: boolean,
    }       

    export interface infoBoxElements {
        elementID: string,
        icon: string,
        message: string,
        count: string,
        onclickAction?: () => {},
        boxColor?: string,
        iconColor?: string,
        progressbar?: boolean,
        progressWidth?: string,
        progressDescription?: string,
        myBootstrap?: string
    }

    export interface statBoxElements {
        elementID: string,
        icon: string,
        caption: string,
        count: string,
        hRef?: string,
        boxColor?: string,
        myBootstrap?: string
    }
    export interface chartElements {
        chartTitle: string,
        chartId: string
    }

    export interface legendElements {
        legendTitle: string,
        legendValues: progressElements[]
    }


    export interface progressElements {
        Label: string,
        givenVal: number,
        maxVal: number,
        color: string
    }
}
