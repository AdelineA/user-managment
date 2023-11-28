export default function Form() {
  return (
    <>
      <div className="flex justify-between px-6 md:px-20 py-10 pt-20 font-bold text-xl">
        <h1>Create Task</h1>
        <button>Save as Draft</button>
      </div>
      <div className=" flex flex-col px-8 md:px-24">
        <form action="">
          <div className="gap-3 flex flex-col">
            <label htmlFor="">Name</label>
            <input type="text" className="border-2 border-gray-800 w-1/2" />
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 pt-4">
            <div className="gap-3 flex flex-col">
              <label htmlFor="">Start Date</label>
              <input type="text" className="border-2 border-gray-800" />
            </div>
            <div className="gap-3 flex flex-col">
              <label htmlFor="">End Date</label>
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4 gap-2 w-1/2">
            <label htmlFor="">Assignee</label>
            <select name="" id="">
              <option value="">Choose assignee</option>
              <option value="">Vital name</option>
              <option value=""> name</option>
              <option value=""> name</option>
            </select>
          </div>
          <div className="flex flex-col pt-4 gap-2 w-1/2">
            <label htmlFor="">Projects</label>
            <select name="" id="">
              <option value="">Choose</option>
              <option value="">Project name</option>
              <option value="">Project name</option>
              <option value="">Project name</option>
            </select>
          </div>
          <div className="flex flex-col pt-4 gap-2">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-1/2 border-2 border-gray-800"
            >
              Add more details to this task
            </textarea>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <label htmlFor="">Priority</label>
            <div className="flex gap-6">
              <input type="radio" name="low" id="" /> Low <br />
              <input type="radio" name="normal" id="" /> Normal <br />
              <input type="radio" name="high" id="" /> High
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-1/2 md:pt-16 pt-4 gap-6 mb-16">
            <div>
              <input type="text" name="firstName" value="Attach :" />
              <input type="file" name="upload" />
              <input
                type="submit"
                id="btn"
                className="border-2 border-gray-400 rounded-lg w-24"
              />
            </div>
            <div className="flex gap-4">
              <button className="bg-white border-2 border-gray-300 px-4 py-2 text-center rounded-lg">
                Cancel
              </button>
              <button className="bg-blue-700 px-4 py-2 text-center rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
