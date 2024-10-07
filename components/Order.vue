<template>
    <n-space vertical class="bg-stone-800">
      <n-card title="INV-100534 - ISMAIL KILINC">
        <template #header-extra>
          <n-space>
            <n-dropdown :options="dropdownOptions" @select="handleSelect">
              <n-button type="info">Options</n-button>
            </n-dropdown>
          </n-space>
        </template>
        <n-tabs type="card" animated>
          <n-tab-pane name="order" tab="Order">
            <n-form label-placement="left" label-width="auto">
              <n-grid :x-gap="12" :y-gap="8" cols="1 s:1 m:2 l:3 xl:4" responsive="screen">
                <n-grid-item>
                  <n-form-item label="Date:">
                    <n-date-picker class="w-full" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Customer Po:">
                    <n-input class="w-full" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Reference:">
                    <n-input class="w-full" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Payment Term:">
                    <n-select class="w-full" :options="paymentTermOptions" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Payment Status:">
                    <n-select class="w-full" :options="paymentStatusOptions" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Shipping Method:">
                    <n-select class="w-full" :options="shippingMethodOptions" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Shipping Date:">
                    <n-date-picker class="w-full" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Currency:">
                    <n-select class="w-full" :options="currencyOptions" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Exchange Rate:">
                    <n-input-number class="w-full" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Warehouse:">
                    <n-select class="w-full" :options="warehouseOptions" />
                  </n-form-item>
                </n-grid-item>
  
                <n-grid-item>
                  <n-form-item label="Contact:">
                    <n-select class="w-full" :options="contactOptions" />
                  </n-form-item>
                </n-grid-item>
              </n-grid>
            </n-form>
            <n-tabs type="card" animated class="mb-2">
              <n-tab-pane name="inventoryItem" tab="Inventory Item" class="w-full">
                <div class="flex flex-col gap-5">
                    <div class="overflow-x-auto">
                        <div class="min-w-[1500px]">
                            <n-data-table 
                                :columns="columns" 
                                :data="data" 
                                class="h-[18rem]"
                                flex-height
                                :scroll-x="true"
                            />
                        </div>
                    </div>
                </div>
              </n-tab-pane>
              <n-tab-pane name="warehouse" tab="Warehouse">
                <div class="flex flex-col gap-5">
                    <div class="overflow-x-auto">
                        <div class="min-w-[1500px]">
                            <n-data-table 
                                :columns="warehouseColumns" 
                                :data="warehouseData" 
                                class="h-[18rem]"
                                flex-height
                                :scroll-x="true"
                            />
                        </div>
                    </div>
                </div>
              </n-tab-pane>
            </n-tabs>
            <n-grid :x-gap="12" :y-gap="8" :cols="24">
              <n-grid-item span="24 m:12">
                <n-card title="Address">
                  <n-form label-placement="left" label-width="auto">
                    <n-form-item label="Bill To:">
                      <n-input />
                    </n-form-item>
                    <n-form-item label="Ship To:">
                      <n-select :options="shipToOptions" />
                    </n-form-item>
                  </n-form>
                </n-card>
              </n-grid-item>
              <n-grid-item span="24 m:12">
                <n-card title="Summary">
                  <n-form label-placement="left" label-width="auto">
                    <n-form-item label="Sub Total:">
                      <n-input disabled value="£ 2.08" />
                    </n-form-item>
                    <n-form-item label="Tax:">
                      <n-input disabled value="£ 0.42" />
                    </n-form-item>
                    <n-form-item label="Total:">
                      <n-input disabled value="£ 2.50" />
                    </n-form-item>
                  </n-form>
                </n-card>
              </n-grid-item>
            </n-grid>
          </n-tab-pane>
          <n-tab-pane name="notes" tab="Notes" disabled>
            <!-- Add Notes -->
             
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-space>
  </template>
  
  <script setup>
  import { ref, h } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faPlus } from '@fortawesome/free-solid-svg-icons'
  import {
    NSpace,
    NCard,
    NButton,
    NTabs,
    NTabPane,
    NForm,
    NGrid,
    NGridItem,
    NFormItem,
    NDatePicker,
    NInput,
    NSelect,
    NInputNumber,
    NDataTable,
    NDropdown,
    NScrollbar
  } from 'naive-ui'
  
  const heightForRow = () => 48

  // Inventory Table Columns
  const columns = [ 
    { 
      title: '', 
      key: 'addButton',
      width: 60,
      render() {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => {
              console.log('Add button clicked');
            }
          },
          {
            icon: () => h(FontAwesomeIcon, { icon: faPlus })
          }
        )
      }
    },
    { 
      title: 'Item Name', 
      key: 'itemName',
      width: 120,
      render(row) {
        return h(NSelect, {
          value: row.itemName,
          onInput: (value) => {
            row.itemName = value
          }
        });
      }
    },
    { 
      title: 'Quantity', 
      key: 'quantity',
      width: 120,
      render(row) {
        return h(NInputNumber, {
          value: row.quantity,
          onUpdateValue: (value) => {
            row.quantity = value; 
          }
        });
      }
    },
    { 
      title: 'UM', 
      key: 'um',
      width: 120,
      render(row) {
        return h(NSelect, {
          value: row.um,
          onInput: (value) => {
            row.um = value; 
          }
        });
      }
    },
    { 
        title: '#Item', 
        key: 'itemNumber', 
        width: 90,
        render(row) {
        return h(NInput, {
          value: row.itemNumber,
          onInput: (value) => {
            row.um = value; 
          }
        });
      }
     }, 
    { 
      title: 'UM Type', 
      key: 'umType',
      width: 120,
      render(row) {
        return h(NSelect, {
          value: row.umType,
          onInput: (value) => {
            row.umType = value; 
          }
        });
      }
    },
    { 
      title: 'Description', 
      key: 'description',
      width: 120,
      ellipsis: {
      tooltip: true
      },
      render(row) {
        return h(NInput, {
          value: row.description,
          onInput: (value) => {
            row.description = value; 
          }
        });
      }
    },
    { 
      title: 'Warehouse', 
      key: 'warehouse',
      width: 150,
      render(row) {
        return h(NSelect, {
          value: row.warehouse,
          onInput: (value) => {
            row.warehouse = value; 
          }
        });
      }
    },
    { 
      title: 'Tax Code', 
      key: 'taxCode',
      width: 120,
      render(row) {
        return h(NSelect, {
          value: row.taxCode,
          onInput: (value) => {
            row.taxCode = value; 
          }
          
        });
      }
    },
    { 
      title: 'Sales Price', 
      key: 'salesPrice',
      width: 120,
      render(row) {
        return h(NInput, {
          value: row.salesPrice,
          onInput: (value) => {
            row.salesPrice = value; 
          }
        });
      }
    },
    { 
      title: 'Net Price', 
      key: 'netPrice',
      width: 120,
      render(row) {
        return h(NInput, {
          value: row.netPrice,
          onInput: (value) => {
            row.netPrice = value; 
          }
        });
      }
    },
    { 
      title: 'Ext Price', 
      key: 'extPrice',
      width: 120,
      render(row) {
        return h(NInput, {
          value: row.extPrice,
          onInput: (value) => {
            row.extPrice = value; 
          }
        });
      }
    }
  ];

  // Warehose Table Columns 
  const warehouseColumns = [
    { title: 'Warehouse Code', key: 'warehouseCode', width: 150, },
    { title: 'UM', key: 'um', width: 120, },
    { title: 'In Stock', key: 'inStock', width: 120, },
    { title: 'On SO', key: 'onSO', width: 120, },
    { title: 'Unallocated Order', key: 'unallocatedOrder', width: 150, },
    { title: 'Free Stock', key: 'freeStock', width: 120, },
    { title: 'PnP Order', key: 'pnPOrder', width: 120, },
    { title: 'In Transit', key: 'inTransit', width: 120, },
    { title: 'Potential Stock', key: 'potentialStock', width: 120, },
    { title: 'Reorder Point', key:'reorderPoint', width: 120, },
    { title: 'Other Location', key: 'otherLocation', width: 120, }
  ];

  // Placeholder data for the inventory table
  const data = ref([
    {
      itemName: 'SAMPLE',
      quantity: 1.000,
      um: 'EACH',
      itemNumber: 1,
      umType: 'EACH',
      description: '1 X MOLEANGS LIMESTONE TILE - SAMPLE',
      warehouse: 'ST ALBANS',
      taxCode: '20.00 %',
      salesPrice: '£ 2.083',
      netPrice: '£ 2.083',
      extPrice: '£ 2.08'
    },{
      itemName: 'SAMPLE',
      quantity: 1.000,
      um: 'EACH',
      itemNumber: 1,
      umType: 'EACH',
      description: '1 X MOLEANGS LIMESTONE TILE - SAMPLE',
      warehouse: 'ST ALBANS',
      taxCode: '20.00 %',
      salesPrice: '£ 2.083',
      netPrice: '£ 2.083',
      extPrice: '£ 2.08'
    },{
      itemName: 'SAMPLE',
      quantity: 1.000,
      um: 'EACH',
      itemNumber: 1,
      umType: 'EACH',
      description: '1 X MOLEANGS LIMESTONE TILE - SAMPLE',
      warehouse: 'ST ALBANS',
      taxCode: '20.00 %',
      salesPrice: '£ 2.083',
      netPrice: '£ 2.083',
      extPrice: '£ 2.08'
    },{
      itemName: 'SAMPLE',
      quantity: 1.000,
      um: 'EACH',
      itemNumber: 1,
      umType: 'EACH',
      description: '1 X MOLEANGS LIMESTONE TILE - SAMPLE',
      warehouse: 'ST ALBANS',
      taxCode: '20.00 %',
      salesPrice: '£ 2.083',
      netPrice: '£ 2.083',
      extPrice: '£ 2.08'
    },
  ]);

  const warehouseData = ref([
    {
      warehouseCode: '12124',
      um: 'EACH',
      inStock: "True",
      onSO: 1,
      unallocatedOrder: 'EACH',
      freeStock: 'No',
      pnPOrder: 'ST ALBANS',
      inTransit: 'Yes',
      potentialStock: 'Yes',
      reorderPoint: 'Not spesified',
      otherLocation: 'Not spesified'
    },{
      warehouseCode: '12124',
      um: 'EACH',
      inStock: "True",
      onSO: 1,
      unallocatedOrder: 'EACH',
      freeStock: 'No',
      pnPOrder: 'ST ALBANS',
      inTransit: 'Yes',
      potentialStock: 'Yes',
      reorderPoint: 'Not spesified',
      otherLocation: 'Not spesified'
    },{
      warehouseCode: '12124',
      um: 'EACH',
      inStock: "True",
      onSO: 1,
      unallocatedOrder: 'EACH',
      freeStock: 'No',
      pnPOrder: 'ST ALBANS',
      inTransit: 'Yes',
      potentialStock: 'Yes',
      reorderPoint: 'Not spesified',
      otherLocation: 'Not spesified'
    },{
      warehouseCode: '12124',
      um: 'EACH',
      inStock: "True",
      onSO: 1,
      unallocatedOrder: 'EACH',
      freeStock: 'No',
      pnPOrder: 'ST ALBANS',
      inTransit: 'Yes',
      potentialStock: 'Yes',
      reorderPoint: 'Not spesified',
      otherLocation: 'Not spesified'
    },
  ]);
  
  const dropdownOptions = ref([
    { label: 'Send Mail', key: 'send_mail' },
    { label: 'Save and Post', key: 'save_post' },
    { label: 'Save', key: 'save'},
    { label: 'Print', key: 'print' },
    { label: 'Save & Close', key: 'save_close' },
    { label: 'Close', key: 'close' }
  ]);
  
  const handleSelect = (key) => {
    switch (key) {
      case 'send_mail':
        console.log('Send Mail action selected');
        break;
      case 'save_post':
        console.log('Save and Post action selected');
        break;
      case 'save':
        console.log('Save action selected');
        break;
      case 'print':
        console.log('Print action selected');
        break;
      case 'save_close':
        console.log('Save & Close action selected');
        break;
      case 'close':
        console.log('Close action selected');
        break;
      default:
        console.log('Unknown action selected');
    }
  };
  
  const paymentTermOptions = [{ label: 'PAYMENT DUE ON ORDER', value: 'due_on_order' }];
  const paymentStatusOptions = [{ label: 'PAID', value: 'paid' }];
  const shippingMethodOptions = [{ label: 'PALLET TRACK', value: 'pallet_track' }];
  const currencyOptions = [{ label: 'GBP', value: 'gbp' }];
  const warehouseOptions = [{ label: 'ST ALBANS', value: 'st_albans' }];
  const contactOptions = [{ label: 'ISMAIL KILINC', value: 'ismail_kilinc' }];
  const shipToOptions = [{ label: 'ISMAIL KILINC', value: 'ismail_kilinc' }];
  </script>
  