export interface MyClass {
   merge(collection_1: number[],collection_2: number[]): number[];
}
export class Sort implements MyClass {
    merge(collection_1: number[], collection_2: number[]): number[] {
      //merge two arrays into single array.
      let colTmp: number[] = collection_1.concat(collection_2);
      //get the length of each array for sorting process
      let col1_len = collection_1.length;
      let col2_len = collection_2.length;

      //define iterator
      let i: number = 0, j: number = 0, k: number = 0;
      
      //if both arrays still has a value to be looped, then compare and sort.
      while(i < col1_len && j < col2_len){
         if(collection_1[i] < collection_2[j]){
            colTmp[k++] = collection_1[i++];
         }else{
            colTmp[k++] = collection_2[j++];
         }
      }
      //if second array is done, go here.
      while(i < col1_len){
         colTmp[k++] = collection_1[i++];
      }
      //if first array is done, go here.
      while(i < col2_len){
         colTmp[k++] = collection_2[j++]
      }
      //return to caller.
      return colTmp;
    }
 }