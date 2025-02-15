import { useStaticQuery, graphql } from 'gatsby';

export function useNavItems() {
    const {
        allNavItemsYaml: { edges },
    } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY1 {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
              pages {
                title
                path
                pages {
                  title
                  path
                }
              }
            }
            hasDivider
          }
        }
      }
    }
  `);

    const navItems = edges.map(({ node }) => node);
    return navItems;
}
