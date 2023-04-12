const rootLayoutStyle = {
    //container
    div: 'w-full md:w-auto flex',
    header: 'w-1/6 h-screen border-r-2 border-gray-200',
    nav: 'mt-8 flex flex-col items-center items-stretch',
    p: 'text-gray-300 mx-11',
    main: 'w-5/6 h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-50',
}

const sidebarStyle = {
    //style for the link
    link: 'text-gray-900 text-center py-2 px-4 m-2 mx-5 rounded hover:text-blue-700 hover:bg-blue-50 hover:border-l-4 hover:border-blue-700  flex items-center justify-start',

    //google icons
    icons: 'material-symbols-outlined mx-3',
}

export { rootLayoutStyle, sidebarStyle }
