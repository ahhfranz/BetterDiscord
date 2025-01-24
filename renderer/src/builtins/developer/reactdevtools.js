import Builtin from "@structs/builtin";

import Strings from "@modules/strings";
import IPC from "@modules/ipc";

import Modals from "@ui/modals";


export default new class ReactDevTools extends Builtin {
    get name() {return "ReactDevTools";}
    get category() {return "developer";}
    get id() {return "reactDevTools";}

    async enabled() {
        this.showModal();
    }

    async disabled() {
        this.showModal();
    }


    initialize() {
        super.initialize();

        let originalType = window.$type;
        
        Object.defineProperty(window, "$type", {
            get: () => {
                return originalType;
            },
            set: (v) => {
                originalType = v?.__originalFunction || v;
            },
        });
    }

    showModal() {
        if (!this.initialized) return;
        Modals.showConfirmationModal(Strings.Modals.additionalInfo, Strings.Modals.restartPrompt, {
            confirmText: Strings.Modals.restartNow,
            cancelText: Strings.Modals.restartLater,
            danger: true,
            onConfirm: () => IPC.relaunch()
        });
    }
};