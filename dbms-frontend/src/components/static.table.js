import React from "react";
// https://www.youtube.com/watch?v=S4MhQ6peq8A
export default({})=>(
    <div>
  <div class="p-5 ml-21 mr-21">
    <h1 class="text-xl font-extrabold mb-2">Query Result</h1>

    <div class="overflow-auto rounded-lg shadow hidden md:block">
      <table class="w-full">
        <thead class="text-black bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
          <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10001</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            Kring New Fit office chair, mesh + PU, black
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1001</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1002</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Canceled</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
    </div>
  </div>
</div>)
{/* <div class="mt-10 ml-20 mr-20 table w-80 ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div> */}
