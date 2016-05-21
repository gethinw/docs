var aliases = require('npm/lib/config/cmd-list').aliases;

//fetch the aliases from npm core, and write out 'pages' entries for them
//so they can be used e.g. as links to the sidebar
module.exports = {
    generate: function() {
        return Object.keys(aliases).map(function(alias) {
            return {
                title: alias,
                isAlias: aliases[alias],
                section: 'cli',
                aliasHref: '/cli/' + aliases[alias]
            }
        })
    }
}
