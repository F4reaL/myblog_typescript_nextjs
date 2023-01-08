export function discussionGql(){
    return`
    {
        repository(name: "myblog_typescript_nextjs", owner: "F4reaL") {
            id
            discussions(first: 10, categoryId: "DIC_kwDOIu2qFs4CTcZ7") {
              nodes{
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author{
                  login
                  url
                  avatarUrl
                }
                labels(first: 100){
                  nodes{
                    name
                  }
                }
              }
            }
             
          }
    }
    `
}