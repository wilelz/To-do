module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: "weektodo-app.netlify.app",
                productName: "WeekToDo",
                publish: ['github'],
                linux: {
                    category: "Utility",
                    description: "Free and Open Source Minimalist Weekly Planner and To Do list App focused on privacy.",
                    target: ["deb", "rpm","pacman","AppImage"],
                    icon: "build/icon.icns"
                },
                win: {
                    target: ["nsis"],
                },
                mac: {
                    category: "public.app-category.productivity",
                    target: ["dmg","pkg"]
                }
            }
        }
    }
}