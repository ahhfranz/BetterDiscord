import React from "@modules/react";
import Divider from "@ui/divider";


export default function SettingItem({id, name, note, inline, children}) {
    return <div className={"bd-setting-item" + (inline ? " inline" : "")}>
                <div className={"bd-setting-header"}>
                    <label htmlFor={id} className={"bd-setting-title"}>{name}</label>
                    {inline && children}
                </div>
                <div className={"bd-setting-note"}>{note}</div>
                {!inline && children}
                <Divider className="bd-setting-divider" />
            </div>;
}