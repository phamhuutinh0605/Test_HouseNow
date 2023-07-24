import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [activeTab, setActiveTab] = useState('all')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          className="TabsRoot pt-10"
          defaultValue="all"
          onValueChange={handleTabChange}
        >
          <Tabs.List
            className="TabsList flex items-center"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className={`TabsTrigger rounded-full ${
                activeTab === 'all'
                  ? 'bg-gray-700 text-white'
                  : 'border border-gray-200 text-gray-700'
              } h-11 px-6 py-3 text-sm font-bold`}
              value="all"
            >
              All
            </Tabs.Trigger>
            <div className="px-2">
              <Tabs.Trigger
                className={`TabsTrigger rounded-full ${
                  activeTab === 'pending'
                    ? 'bg-gray-700 text-white'
                    : 'border border-gray-200 text-gray-700'
                } h-11 px-6 py-3 text-sm font-bold`}
                value="pending"
              >
                Pending
              </Tabs.Trigger>
            </div>
            <Tabs.Trigger
              className={`TabsTrigger rounded-full ${
                activeTab === 'completed'
                  ? 'bg-gray-700 text-white'
                  : 'border border-gray-200 text-gray-700'
              } h-11 px-6 py-3 text-sm font-bold`}
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <div className="pt-10">
            <TodoList tabs={activeTab} />
          </div>
        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
