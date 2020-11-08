const boards = Array.apply(null, {length: 24}).map(
  (item: any, index: number) => ({
    id: index, name: `Board name ${index + 1}` 
  }) 
)

export default boards;
